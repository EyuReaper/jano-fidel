const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');
const { version } = require('../package.json'); // Pull version from package.json

// --- 1. Helpers ---

const style = {
    red: (t) => `\x1b[31m${t}\x1b[0m`,
    yellow: (t) => `\x1b[33m${t}\x1b[0m`,
    bold: (t) => `\x1b[1m${t}\x1b[0m`,
    reset: '\x1b[0m'
};

/**
 * Handles CLI flags before running code
 * @param {string[]} args 
 */
function handleFlags(args) {
    if (args.includes('--version') || args.includes('-v')) {
        console.log(`ጃኖ ፊደል (Jano Fidel) - Version ${version}`);
        process.exit(0);
    }
    if (args.includes('--help') || args.includes('-h')) {
        console.log(`
${style.bold("ጃኖ ፊደል (Jano Fidel) CLI")}

${style.bold("አጠቃቀም (Usage):")}
  jano <ፋይል_ስም.jf>

${style.bold("ትዕዛዞች (Flags):")}
  -v, --version    የስሪት ቁጥሩን ያሳያል (Show version)
  -h, --help       ይህንን መመሪያ ያሳያል (Show help)
        `);
        process.exit(0);
    }
}

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
    // Check flags from the actual command line
    handleFlags(process.argv.slice(2));

    const fileName = path.basename(originalFilePath);
    const dirName = path.dirname(path.resolve(originalFilePath));
    const tempFile = path.join(dirName, `.${path.basename(originalFilePath, '.jf')}.tmp.js`);
    
    try {
        fs.writeFileSync(tempFile, jsCode, 'utf8');

        const hookPath = require.resolve('./hook');
        const child = spawn('node', ['-r', hookPath, tempFile], { 
            stdio: ['inherit', 'inherit', 'pipe'], 
            cwd: process.cwd() 
        });

        child.stderr.on('data', (data) => {
            const remappedError = remapStack(data, tempFile, fileName);
            process.stderr.write(remappedError);
        });

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