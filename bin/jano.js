#!/usr/bin/env node

const { transpile, JANO_PRELUDE } = require('../src/engine');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');

const fileArg = process.argv[2];

if (!fileArg) {
    console.log(`
    ጃኖ ፊደል (Jano Fidel) - CLI
    ---------------------------
    አጠቃቀም (Usage): 
      jano <ፋይል_ስም.jf>    - ፋይሉን ለማስኬድ
    `);
    process.exit(1);
}

const mainFile = path.resolve(process.cwd(), fileArg);

if (!mainFile.endsWith('.jf')) {
    console.error("ስህተት: ፋይሉ በ '.jf' ማለቅ አለበት።");
    process.exit(1);
}

const DIST_DIR = path.join(process.cwd(), 'dist');

// To keep track of processed files and avoid loops
const processedFiles = new Set();

function compileRecursive(filePath) {
    console.log(`Compiling: ${filePath}`);
    if (processedFiles.has(filePath)) {
        console.log('Already processed, skipping.');
        return;
    }
    processedFiles.add(filePath);

    const fileContent = fs.readFileSync(filePath, 'utf8');

    // Find all .jf requires
    const requireRegex = /ጠይቅ\s*\(\s*['"](.+?\.jf)['"]\s*\)/g;
    let match;
    while ((match = requireRegex.exec(fileContent)) !== null) {
        const requiredFile = path.resolve(path.dirname(filePath), match[1]);
        console.log(`Found dependency: ${requiredFile}`);
        if (fs.existsSync(requiredFile)) {
            compileRecursive(requiredFile);
        } else {
            console.log('Dependency not found, skipping.');
        }
    }

    // Transpile the file content
    let transpiledCode = transpile(fileContent);

    // Replace .jf with .js in require paths
    transpiledCode = transpiledCode.replace(/(require\s*\(\s*['"])([^'"]+)\.jf(['"]\s*\))/g, '$1$2.js$3');

    const finalCode = `${JANO_PRELUDE}\n${transpiledCode}`;

    // Save the transpiled file to dist
    const outFileName = path.basename(filePath, '.jf') + '.js';
    const outFilePath = path.join(DIST_DIR, outFileName);
    fs.writeFileSync(outFilePath, finalCode, 'utf8');
}


try {
    // 1. Setup dist dir
    if (fs.existsSync(DIST_DIR)) {
        fs.rmSync(DIST_DIR, { recursive: true, force: true });
    }
    fs.mkdirSync(DIST_DIR);

    // 2. Compile all files
    compileRecursive(mainFile);

    // 3. Run the main file
    const mainJsFile = path.join(DIST_DIR, path.basename(mainFile, '.jf') + '.js');
    
    const child = spawn('node', [mainJsFile], { stdio: 'inherit' });
    child.on('close', (code) => {
        // Clean up dist dir
        if (fs.existsSync(DIST_DIR)) {
            fs.rmSync(DIST_DIR, { recursive: true, force: true });
        }
        if (code !== 0) {
            console.error(`\nJano process exited with code ${code}`);
        }
    });

} catch (err) {
    console.error('An error occurred:', err);
    // Clean up dist dir
    if (fs.existsSync(DIST_DIR)) {
        fs.rmSync(DIST_DIR, { recursive: true, force: true });
    }
}
