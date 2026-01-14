const JANO_KEYWORDS = require('./dictionary');
const { JANO_PRELUDE } = require('./prelude');
const fs = require('fs');

/**
 * ጃኖ ፊደል (Jano Fidel) Transpiler Engine
 */
function transpile(inputCode) {
    // This regex identifies words, strings, and Ethiopic symbols
    const regex = /("[^"]*"|'[^']*'|`[^`]*`|\/\/[^\n]*|[።፤፡፦፣]|[ሀ-፟፩-፿]+|[a-zA-Z0-9_]+|[^\s])/g;
    
    return inputCode.replace(regex, (token) => {
        if (token.startsWith('"') || token.startsWith("'") || token.startsWith("//")) {
            return token;
        }

        // Check if the token is an Ethiopic Number (e.g., ፲፪)
        if (/^[፩-፿]+$/.test(token)) {
            return convertEthiopicToArabic(token);
        }

        return JANO_KEYWORDS[token] || token;
    });
}

// Simple helper to turn Ethiopic numerals into JavaScript numbers
function convertEthiopicToArabic(eth) {
    const valueMap = {
        '፩':1, '፪':2, '፫':3, '፬':4, '፭':5, '፮':6, '፯':7, '፰':8, '፱':9,
        '፲':10, '፳':20, '፴':30, '፵':40, '፶':50, '፷':60, '፸':70, '፹':80, '፺':90,
        '፟':0 // Zero, or acts as a separator
    };
    const multiplierMap = {
        '፻': 100,
        '፼': 10000
    };

    let total = 0;
    let currentBlockValue = 0; // Stores the value of the current digit/tens before a multiplier

    for (let i = 0; i < eth.length; i++) {
        const char = eth[i];

        if (multiplierMap[char]) {
            // If it's a multiplier (፻ or ፼)
            if (currentBlockValue === 0 && char === '፻') { // Handle cases like just '፻' meaning 100
                 currentBlockValue = 1;
            } else if (currentBlockValue === 0 && char === '፼') { // Handle cases like just '፼' meaning 10000
                currentBlockValue = 1;
            }

            total += currentBlockValue * multiplierMap[char];
            currentBlockValue = 0; // Reset for the next block of numbers
        } else if (valueMap[char] !== undefined) {
            // If it's a digit or ten
            currentBlockValue += valueMap[char];
        } else {
            // Unknown character or invalid numeral sequence
            // For robustness, returning NaN or throwing an error is better
            return NaN; 
        }
    }
    // Add any remaining units/tens that weren't followed by a multiplier
    total += currentBlockValue;
    return total.toString();
}
function processFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    const transpiled = transpile(content);
    // Combine the prelude (built-ins) with the user's code
return `(function(){\n${JANO_PRELUDE}\n${transpiled}\n})();`;}



module.exports = { transpile, processFile, JANO_PRELUDE, convertEthiopicToArabic };
