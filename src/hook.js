const fs = require('fs');
const { transpile, JANO_PRELUDE } = require('./engine');

// Tell Node.js to handle .jf files
require.extensions['.jf'] = function (module, filename) {
    const content = fs.readFileSync(filename, 'utf8');
    const transpiled = transpile(content);
    
    // Inject prelude so the required file also has access to 'ያትም' etc.
    const finalCode = `${JANO_PRELUDE}\n${transpiled}`;
    
    module._compile(finalCode, filename);
};