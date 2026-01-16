#!/usr/bin/env node
const { processFile } = require('../src/engine');
const { runCode } = require('../src/runner');
const path = require('path');
const pkg = require('../package.json');

// Branding Colors
const RED_BG = '\x1b[41m';
const WHITE_TEXT = '\x1b[37m';
const BOLD = '\x1b[1m';
const RESET = '\x1b[0m';

const logo = `${RED_BG}${WHITE_TEXT}${BOLD} ጃ ${RESET} ${RED_BG}${WHITE_TEXT}${BOLD} ፊ ${RESET}  ${BOLD}ጃኖ ፊደል (Jano Fidel)${RESET} v${pkg.version}\n`;

const args = process.argv.slice(2);
const fileArg = args[0];

// 1. Handle Version Flag
if (args.includes('--version') || args.includes('-v')) {
    console.log(logo);
    process.exit(0);
}

// 2. Handle Help Flag or No Arguments
if (args.includes('--help') || args.includes('-h') || !fileArg) {
    console.log(logo);
    console.log(`${BOLD}አጠቃቀም (Usage):${RESET}`);
    console.log("  jano <ፋይል_ስም.jf>");
    
    console.log(`\n${BOLD}ትዕዛዞች (Flags):${RESET}`);
    console.log("  -v, --version    የስሪት ቁጥሩን ያሳያል (Show version)");
    console.log("  -h, --help       ይህንን መመሪያ ያሳያል (Show help)");
    
    console.log(`\n${BOLD}ምሳሌ (Example):${RESET}`);
    console.log("  jano ሰላም.jf");
    process.exit(0);
}

// 3. Main Execution
const filePath = path.resolve(process.cwd(), fileArg);

if (!filePath.endsWith('.jf')) {
    console.error(`${BOLD}${RED_BG} ስህተት ${RESET} ፋይሉ በ '.jf' ማለቅ አለበት።`);
    process.exit(1);
}

try {
    const jsCode = processFile(filePath); 
    runCode(jsCode, filePath);
} catch (err) {
    console.error(`\n${BOLD}${RED_BG} የጃኖ ስህተት ${RESET}: ${err.message}`);
}