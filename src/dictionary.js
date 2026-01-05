/**
 * ጃኖ ፊደል (Jano Fidel) - Official Dictionary
 * Mapping Amharic keywords to JavaScript equivalents.
 * Optimized for DX (Developer Experience) and logical flow.
 */

const JANO_KEYWORDS = {
  // --- Variables & Constants ---
  'ተለዋጭ': 'var',      // Added: Traditional variable declaration
  'ይሁን': 'let',        // Block-scoped variable
  'ቋሚ': 'const',       // Constant
  'ይህ': 'this',         // Current context reference

  // --- Functions & Classes ---
  'ተግባር': 'function',
  'መልስ': 'return',
  'ክፍል': 'class',
  'አዲስ': 'new',
  'ያራዝማል': 'extends',  // Updated: Logical for inheritance
  'የበላይ': 'super',     // Updated: Logical for "the one above"
  'አስገኝ': 'yield',      // Updated: Better DX for generators

  // --- Logic & Flow Control ---
  'ከሆነ': 'if',
  'ካልሆነ': 'else',
  'ምረጥ': 'switch',
  'ሁኔታ': 'case',
  'መደበኛ': 'default',
  'ውጣ': 'break',
  'ቀጥል': 'continue',

  // --- Loops & Iteration ---
  'ለእያንዳንዱ': 'for',
  'እስከ': 'while',
  'ውስጥ': 'in',

  // --- Booleans & Types ---
  'እውነት': 'true',
  'ሀሰት': 'false',
  'ባዶ': 'null',
  'አይነት': 'typeof',
  'ምሳሌ': 'instanceof',

  // --- Exception Handling ---
  'ሞክር': 'try',
  'ያዝ': 'catch',
  'በመጨረሻ': 'finally',

  // --- Modules & Access Control (Strict/Future Use) ---
  'የጋራ': 'public',     // Updated: Intuitive for shared access
  'የግል': 'private',     // Hidden/Encapsulated
  'የተጠበቀ': 'protected',
  'ላክ': 'export',
  'አምጣ': 'import',
  'ጠብቅ': 'await',
  'መገናኛ': 'interface',
  'ጥቅል': 'package',
  'የማይንቀሳቀስ': 'static',
  'ተከተል': 'enum',
  'ከፍተኛ': 'super',     // Reserved as secondary for safety

  // --- Punctuation & Operators ---
  '።': '.',     // Updated: Now used as the Dot Operator
  '፤': ';',     // Statement terminator
  '፡': ':',     // Colon
  '፦': ':',     // Preface colon
    '፣': ',',     // Comma
  
  // --- Built-in Utilities ---
  'ያትም': 'console.log',
  'ማንቂያ': 'alert'
};

module.exports = JANO_KEYWORDS;