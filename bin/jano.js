#!/usr/bin/env node
const { processFile } = require('../src/engine');
const { runCode } = require('../src/runner');
const dictionary = require('../src/dictionary');
const path = require('path');
const pkg = require('../package.json');

// Branding
const RED_BG = '\x1b[41m';
const WHITE_TEXT = '\x1b[37m';
const BOLD = '\x1b[1m';
const YELLOW = '\x1b[33m';
const CYAN = '\x1b[36m';
const RESET = '\x1b[0m';

const logo = `${RED_BG}${WHITE_TEXT}${BOLD} ጃ ${RESET} ${RED_BG}${WHITE_TEXT}${BOLD} ፊ ${RESET}  ${BOLD}ጃኖ ፊደል (Jano Fidel)${RESET} v${pkg.version}\n`;

const args = process.argv.slice(2);

// --- 1. Handle Flags FIRST ---

if (args.includes('--version') || args.includes('-v')) {
    console.log(logo);
    process.exit(0);
}

if (args.includes('--list') || args.includes('-l')) {
    console.log(logo);
    console.log(`${BOLD}${CYAN}የጃኖ መዝገበ-ቃላት (Jano Dictionary)${RESET}\n`);
    console.log(`${BOLD}${"ጃኖ (Jano)".padEnd(20)} | ${"JavaScript Equivalent"}${RESET}`);
    console.log("━".repeat(50));

    Object.entries(dictionary).forEach(([jano, js]) => {
        const cleanJano = jano.replace(/\\b/g, '');
        if (cleanJano.length < 30) {
            console.log(`${cleanJano.padEnd(20)} | ${YELLOW}${js}${RESET}`);
        }
    });
    process.exit(0);
}

// --- 2. Handle File Execution SECOND ---

const fileArg = args.find(arg => !arg.startsWith('-'));

if (args.includes('--help') || args.includes('-h') || !fileArg) {
    console.log(logo);
    console.log(`${BOLD}አጠቃቀም (Usage):${RESET}`);
    console.log("  jano <ፋይል_ስም.jf>");
    console.log(`\n${BOLD}ትዕዛዞች (Flags):${RESET}`);
    console.log("  -l, --list       የቃላት መዝገብ ዝርዝር");
    console.log("  -v, --version    የስሪት ቁጥሩን ያሳያል");
    process.exit(0);
}

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