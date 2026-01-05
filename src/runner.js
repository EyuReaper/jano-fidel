const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

/**
 * Helper to translate exit status codes to Amharic context
 */
function getExitSummary(code) {
    if (code === 1) return "ያልተጠበቀ ስህተት አጋጥሟል (Uncaught Error)";
    if (code === 130) return "ተጠቃሚው ፕሮግራሙን አቋርጦታል (User Interrupted)";
    return `ፕሮግራሙ በስህተት ተዘግቷል (Exit Code: ${code})`;
}

/**
 * Executes transpiled JavaScript code with professional process handling.
 */
function runCode(jsCode, originalFilePath) {
    const tempFile = path.join(
        path.dirname(originalFilePath || process.cwd()), 
        `.${path.basename(originalFilePath || 'jano', '.jf')}.tmp.js`
    );
    
    try {
        fs.writeFileSync(tempFile, jsCode, 'utf8');

        const child = spawn('node', [tempFile], { 
            stdio: 'inherit',
            cwd: process.cwd() 
        });

        child.on('close', (code) => {
            // 1. Cleanup: Always remove the temporary file
            if (fs.existsSync(tempFile)) {
                fs.unlinkSync(tempFile);
            }
            
            // 2. Trigger Amharic Error Summary
            if (code !== 0 && code !== null) {
                console.log('\n' + '-'.repeat(40));
                console.error(`⚠️  የጃኖ ማጠቃለያ፦ ${getExitSummary(code)}`);
                console.error(`🔍 ፍንጭ፦ ከላይ ያለውን የ ክምር ፈለግ(Stack Trace) በመመልከት ስህተቱን ያስተካክሉ::`);
                console.log('-'.repeat(40) + '\n');
            }
        });

        child.on('error', (err) => {
            console.error(`\n[ጃኖ ስህተት]: ፕሮግራሙን ማስጀመር አልተቻለም፦ ${err.message}`);
            if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
        });

    } catch (err) {
        console.error(`\n[የፋይል ስህተት]: ጊዜያዊ ፋይል መፍጠር አልተቻለም፦ ${err.message}`);
    }
}

module.exports = { runCode };