const fs = require('fs');
const path = require('path');
const JANO_KEYWORDS = require('./dictionary');

/**
 * The core translation logic
 */
function transpile(inputCode) {
    // Regex isolates strings, comments, Amharic words, and our special punctuation
    const regex = /("[^"]*"|'[^']*'|\/\/[^\n]*|[ሀ-፿]+|[a-zA-Z0-9]+|[።፤፡፦፣])/g;

    return inputCode.replace(regex, (token) => {
        // Skip strings and comments
        if (token.startsWith('"') || token.startsWith("'") || token.startsWith("//")) {
            return token;
        }
        // Swap if in dictionary, else keep original
        return JANO_KEYWORDS[token] || token;
    });
}

/**
 * Reads an .ajs file and returns the translated JavaScript string
 */
function processFile(filePath) {

    if (!filePath.endsWith('.jf')) {
        console.warn("ማስጠንቀቂያ: ፋይሉ በ '.jf' ማለቅ አለበት።");
    }
    
    if (!fs.existsSync(filePath)) {
        throw new Error(`ፋይሉ አልተገኘም (File not found): ${filePath}`);
    }

    const amharicCode = fs.readFileSync(filePath, 'utf8');
    return transpile(amharicCode);
}

module.exports = { transpile, processFile };