#!/usr/bin/env node
const { processFile } = require('../src/engine'); // Assuming processFile handles reading + prelude
const { runCode } = require('../src/runner');
const path = require('path');

// Branding
const RED_BG = '\x1b[41m';
const WHITE_TEXT = '\x1b[37m';
const BOLD = '\x1b[1m';
const RESET = '\x1b[0m';

const logo = `${RED_BG}${WHITE_TEXT}${BOLD} ጃ ${RESET} ${RED_BG}${WHITE_TEXT}${BOLD} ፊ ${RESET}  ${BOLD}ጃኖ ፊደል (Jano Fidel)${RESET}\n`;

const fileArg = process.argv[2];

// 1. Show Help/Logo if no file provided
if (!fileArg) {
    console.log(logo);
    console.log("አጠቃቀም: jano <ፋይል_ስም.jf>");
    process.exit(1);
}

// 2. Resolve paths
const filePath = path.resolve(process.cwd(), fileArg);

if (!filePath.endsWith('.jf')) {
    console.error("ስህተት: ፋይሉ በ '.jf' ማለቅ አለበት።");
    process.exit(1);
}

// 3. The Execution Flow
try {
    // Note: Use your existing processFile which reads the code and adds the prelude
    const jsCode = processFile(filePath); 
    
    // This calls your professional runner with the styled boxes
    runCode(jsCode, filePath);

} catch (err) {
    // This catches high-level file reading errors
    console.error(`\n[የጃኖ ስህተት]: ${err.message}`);
}