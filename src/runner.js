const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

function getExitSummary(code) {
    if (code === 1) return "ያልተጠበቀ ስህተት አጋጥሟል (Uncaught Error)";
    if (code === 130) return "ተጠቃሚው ፕሮግራሙን አቋርጦታል (User Interrupted)";
    return `ፕሮግራሙ በስህተት ተዘግቷል (Exit Code: ${code})`;
}

function remapStack(data, tempFilePath, originalFileName) {
    const output = data.toString();
    // Escape backslashes for Windows compatibility
    const escapedPath = tempFilePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedPath, 'g');
    return output.replace(regex, originalFileName);
}

function runCode(jsCode, originalFilePath) {
    const fileName = path.basename(originalFilePath);
    const dirName = path.dirname(path.resolve(originalFilePath));
    
    // Create a hidden temp file in the same directory as the source
    const tempFile = path.join(dirName, `.${path.basename(originalFilePath, '.jf')}.tmp.js`);
    
    try {
        fs.writeFileSync(tempFile, jsCode, 'utf8');

        // Resolve the path to the hook to preload it in the new process
        const hookPath = require.resolve('./hook');

        const child = spawn('node', ['-r', hookPath, tempFile], { 
            stdio: ['inherit', 'inherit', 'pipe'], 
            cwd: process.cwd() 
        });

        child.stderr.on('data', (data) => {
            // This is the "Magic": The user sees 'ዋና.jf:10' instead of '.ዋና.tmp.js:10'
            const remappedError = remapStack(data, tempFile, fileName);
            process.stderr.write(remappedError);
        });

        child.on('close', (code) => {
            // Clean up the evidence immediately
            if (fs.existsSync(tempFile)) {
                try { fs.unlinkSync(tempFile); } catch(e) {}
            }
            
            if (code !== 0 && code !== null) {
                console.log('\n' + '-'.repeat(40));
                console.error(`⚠️  የጃኖ ማጠቃለያ፦ ${getExitSummary(code)}`);
                console.error(`🔍 ፍንጭ፦ ከላይ በ ${fileName} ውስጥ የተጠቀሰውን መስመር ይመልከቱ።`);
                console.log('-'.repeat(40) + '\n');
            }
        });

        // Ensure cleanup if the main process is interrupted (Ctrl+C)
        process.on('SIGINT', () => {
            if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
            process.exit();
        });

    } catch (err) {
        console.error(`\n[የፋይል ስህተት]: ጊዜያዊ ፋይል መፍጠር አልተቻለም፦ ${err.message}`);
    }
}

module.exports = { runCode };