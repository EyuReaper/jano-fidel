const JANO_KEYWORDS = require('./dictionary');
const JANO_PRELUDE = require('./prelude');

/**
 * ጃኖ ፊደል (Jano Fidel) Transpiler Engine
 */
function transpile(inputCode) {
    // Range extended to ፿ to cover all Ethiopic symbols/numbers
const regex = /("[^"]*"|'[^']*'|`[^`]*`|\/\/[^\n]*|[።፤፡፦፣]|[ሀ-፟፩-፿_]+|[a-zA-Z0-9_]+|[^\s])/g;
    return inputCode.replace(regex, (token) => {
        if (
            token.startsWith('"') || 
            token.startsWith("'") || 
            token.startsWith("`") || 
            token.startsWith("//")
        ) {
            return token;
        }
        return JANO_KEYWORDS[token] || token;
    });
}

module.exports = { transpile, JANO_PRELUDE };