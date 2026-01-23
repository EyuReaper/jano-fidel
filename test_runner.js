

const { transpile } = require('./src/engine.js');
const { JANO_PRELUDE } = require('./src/prelude.js');
const fs = require('fs');
const { spawn } = require('child_process');
const path = require('path');

async function run() {
  // 1. Read the files
  const wunaContent = fs.readFileSync('ዋና.jf', 'utf8');
  const sewContent = fs.readFileSync('ሰው.jf', 'utf8');

  // 2. Transpile the code
  const transpiledWuna = transpile(wunaContent);
  const transpiledSew = transpile(sewContent);

  // 3. Create temporary files
  const tmpDir = '.tmp';
  if (!fs.existsSync(tmpDir)) {
    fs.mkdirSync(tmpDir);
  }
  const sewTmpPath = path.join(tmpDir, 'sew.mjs');
  fs.writeFileSync(sewTmpPath, `"use strict";
${JANO_PRELUDE}\n\n${transpiledSew}`);

  // 4. Modify the main file to import from the temporary file
  const finalWunaCode = transpiledWuna.replace('./ሰው.jf', './.tmp/sew.mjs');
  
  // 5. Write the final code to a temporary file
  const wunaTmpPath = path.join(tmpDir, 'wuna.mjs');
  fs.writeFileSync(wunaTmpPath, `"use strict";
${JANO_PRELUDE}\n\n${finalWunaCode}`);

  // 6. Execute the temporary file
  const child = spawn('node', [wunaTmpPath], { stdio: 'inherit' });

  child.on('close', (code) => {
    // Clean up temporary files
    fs.unlinkSync(sewTmpPath);
    fs.unlinkSync(wunaTmpPath);
    fs.rmdirSync(tmpDir);
  });
}

run();
