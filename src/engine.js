const JANO_KEYWORDS = require('./dictionary');
const { JANO_PRELUDE } = require('./prelude');
const fs = require('fs');

/**
 * ጃኖ ፊደል (Jano Fidel) Transpiler Engine
 */
function transpile(inputCode) {
    if (!inputCode) return ""; 

    // Improved Regex: Ensures underscores stay attached and handles complex punctuation
    const regex = /(\/\/[^\n]*|"[^"]*"|'[^']*'|`[^`]*`|=>|[።፤፡፦፣]|\(|\)|[፩-፼፟]+|#?[\u1200-\u1360\u1367-\u137F_]+|[:]|[^\s])/g;
    
    let tokens = inputCode.match(regex) || [];
    let processed = [];
    
    // State Tracking
    let braceLevel = 0;
    let classStack = []; 

    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i];

        if (token.startsWith('//')) {
            continue;
        }

        // 1. Strings
        if (token.startsWith('"') || token.startsWith("'" ) || token.startsWith("`")) {
            processed.push(token);
            continue;
        }

        // 2. Map Keywords
        let mapped = JANO_KEYWORDS[token] || token;

        // --- OOP Context Tracking ---
        if (mapped === 'class') classStack.push(braceLevel + 1);
        if (token === '{') braceLevel++;
        if (token === '}') {
            if (classStack.length > 0 && classStack[classStack.length - 1] === braceLevel) {
                classStack.pop();
            }
            braceLevel--;
        }

        const isInsideClassBody = classStack.length > 0 && braceLevel === classStack[classStack.length - 1];

        // 3. FIX: Class Methods (Strip 'function' / 'ተግባር')
        if (mapped === 'function' && isInsideClassBody) {
            // Check if the next token is not a parenthesis, which would indicate a named function, not a method
            if (tokens[i + 1] !== '(') {
                 continue; 
            }
        }

        // 4. FIX: "else if" (ካልሆነ ወይም)
        if (mapped === 'else') {
            const nextToken = tokens[i + 1];
            const nextMapped = JANO_KEYWORDS[nextToken] || nextToken;
            // Catch both 'ወይም' and standard 'if' following an else
            if (nextMapped === '||' || nextMapped === 'if') {
                processed.push('else if');
                i++; // Skip the next token
                continue;
            }
        }

        // 5. FIX: "and" (እና) mapping
        // Ensure 'እና' translates specifically to '&&' for the stress test
        if (token === 'እና') {
            processed.push('&&');
            continue;
        }

        // 6. Private Fields (#)
        if (token.startsWith('#')) {
            const content = token.substring(1);
            if (content.length > 0 && /[^\x00-\x7F]/.test(content)) {
                token = `#_${Buffer.from(content).toString('hex')}`;
            }
            // If the previous token was 'private', pop it before pushing the new token
            if (processed.length > 0 && JANO_KEYWORDS[processed[processed.length - 1]] === 'private') {
                processed.pop(); 
            }
            processed.push(token);
            continue;
        }

        // 7. Numerals
        if (/^[፩-፼፟]+$/.test(token)) {
            const num = convertEthiopicToArabic(token);
            processed.push(isNaN(num) ? token : num.toString());
            continue;
        }

        processed.push(mapped);
    }

    // 8. Post-Processor: Fix spacing for methods and complex operators
    return processed.join(' ')
        .replace(/=\s+=\s+=/g, '===')   
        .replace(/!\s+=\s+=/g, '!==')   
        .replace(/=\s+=/g, '==')        
        .replace(/>\s+=/g, '>=' )        
        .replace(/<\s+=/g, '<=')        
        .replace(/\s?\.\s?/g, '.')      // Glue 'Math . sqrt' -> 'Math.sqrt'
        .replace(/\s?\(\s?/g, '(')      // Glue 'func (' -> 'func('
        .replace(/\s?\)\s?/g, ')')      
        .replace(/፤|።/g, ';')           
        .replace(/፡/g, ' ');             
}

/**
 * Handles Ethiopic numerals
 */
function convertEthiopicToArabic(eth) {
    const values = { '፟': 0, '፩':1, '፪':2, '፫':3, '፬':4, '፭':5, '፮':6, '፯':7, '፰':8, '፱':9, '፲':10, '፳':20, '፴':30, '፵':40, '፶':50, '፷':60, '፸':70, '፹':80, '፺':90 };
    let total = 0, currentPending = 0, currentValue = 0;
    for (let char of eth) {
        if (char === '፼') { 
            currentPending += currentValue || 1; 
            total += (currentPending * 10000); 
            currentPending = 0; currentValue = 0; 
        }
        else if (char === '፻') { 
            currentPending += currentValue || 1; 
            total += (currentPending * 100); 
            currentPending = 0; currentValue = 0; 
        }
        else { currentValue += values[char] || 0; }
    }
    return total + currentPending + currentValue;
}

function processFile(filePath) {
    try {
        const content = fs.readFileSync(filePath, 'utf8');
        if (!content || content.trim() === "") return `(function(){\n${JANO_PRELUDE}\n})();`;
        const transpiled = transpile(content);
        return `(function(){\n${JANO_PRELUDE}\n${transpiled}\n})();`;
    } catch (err) {
        console.error(`Error processing file:`, err);
        return "";
    }
}

module.exports = { transpile, processFile, convertEthiopicToArabic };