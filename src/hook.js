const fs = require('fs');
const { transpile, JANO_PRELUDE } = require('./engine');

// WARNING: require.extensions is a deprecated API.
// This usage is temporary and needs to be replaced with a more robust module
// loading strategy (e.g., Node.js Loader Hooks for ESM or pre-transpilation)
// in future versions to ensure long-term compatibility and stability with Node.js.
// Tell Node.js to handle .jf files
require.extensions['.jf'] = function (module, filename) {
    const content = fs.readFileSync(filename, 'utf8');
    const transpiled = transpile(content);
    
    // Inject prelude so the required file also has access to 'ያትም' etc.
    const finalCode = `${JANO_PRELUDE}\n${transpiled}`;
    
    module._compile(finalCode, filename);
};