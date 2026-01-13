const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const hookPath = require.resolve('./hook');

// --- 1. Helpers (Top of the file) ---

const style = {
    red: (t) => `\x1b[31m${t}\x1b[0m`,
    yellow: (t) => `\x1b[33m${t}\x1b[0m`,
    bold: (t) => `\x1b[1m${t}\x1b[0m`,
    reset: '\x1b[0m'
};

function getExitSummary(code) {
    if (code === 1) return "ያልተጠበቀ ስህተት አጋጥሟል (Uncaught Error)";
    if (code === 130) return "ተጠቃሚው ፕሮግራሙን አቋርጦታል (User Interrupted)";
    return `ፕሮግራሙ በስህተት ተዘግቷል (Exit Code: ${code})`;
}

function remapStack(data, tempFilePath, originalFileName) {
    const output = data.toString();
    const escapedPath = tempFilePath.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(escapedPath, 'g');
    return output.replace(regex, originalFileName);
}

// --- 2. Main Execution Function ---

function runCode(jsCode, originalFilePath) {
    const fileName = path.basename(originalFilePath);
    const dirName = path.dirname(path.resolve(originalFilePath));
    const tempFile = path.join(dirName, `.${path.basename(originalFilePath, '.jf')}.tmp.js`);
    
    try {
        fs.writeFileSync(tempFile, jsCode, 'utf8');

        // Preload the hook to handle imports
        const hookPath = require.resolve('./hook');
        const child = spawn('node', ['-r', hookPath, tempFile], { 
            stdio: ['inherit', 'inherit', 'pipe'], 
            cwd: process.cwd() 
        });

        child.stderr.on('data', (data) => {
            const remappedError = remapStack(data, tempFile, fileName);
            process.stderr.write(remappedError);
        });

        // --- THE BOX UI LOGIC  HERE ---
        child.on('close', (code) => {
            if (fs.existsSync(tempFile)) {
                try { fs.unlinkSync(tempFile); } catch(e) {}
            }
            
            if (code !== 0 && code !== null) {
                const summary = getExitSummary(code);
                const border = style.red("┃");
                
                console.error(`\n` + style.red("┏" + "━".repeat(60) + "┓"));
                console.error(`${border}  ${style.bold(style.red("⚠️  የጃኖ ማጠቃለያ (Jano Summary)"))}`.padEnd(74) + border);
                console.error(style.red("┣" + "━".repeat(60) + "┫"));
                console.error(`${border}  ${style.bold("ሁኔታ፦")} ${summary}`.padEnd(68) + border);
                console.error(`${border}  ${style.bold("ፋይል፦")} ${fileName}`.padEnd(68) + border);
                console.error(`${border}${' '.repeat(60)}${border}`);
                console.error(`${border}  🔍 ${style.bold("ፍንጭ፦")} የመስመር ቁጥሩን በ ${style.bold(fileName)} ውስጥ ይዩ።`.padEnd(72) + border);
                console.error(style.red("┗" + "━".repeat(60) + "┛") + `\n`);
            }
        });

        process.on('SIGINT', () => {
            if (fs.existsSync(tempFile)) fs.unlinkSync(tempFile);
            process.exit();
        });

    } catch (err) {
        console.error(`\n[የፋይል ስህተት]: ጊዜያዊ ፋይል መፍጠር አልተቻለም፦ ${err.message}`);
    }
}

module.exports = { runCode };