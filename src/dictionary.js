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
  'ግንባታ': 'constructor',
  'መልስ': 'return',
  'ተቀባይ' : 'resolve',
  "መደብ": "class",
  'አዲስ': 'new',
  'ያራዝማል': 'extends',  // Updated: Logical for inheritance
  'የበላይ': 'super',     // Updated: Logical for "the one above"
  'አስገኝ': 'yield',      // Updated: Better DX for generators
  'ቃልኪዳን': 'Promise',
  'ቃልኪዳን': 'Promise',
  "ክፍል": "module",         // Module
    "ጠይቅ": "require",        // Require
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
  "የ": "of",

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
  'ውጤት': 'exports',
  'አምጣ': 'import',
  'ጠብቅ': 'await',
  'መገናኛ': 'interface',
  'ጥቅል': 'package',
  'የማይንቀሳቀስ': 'static',
  'ተከተል': 'enum',

  // --- Punctuation & Operators ---
  '።': '.',     // Updated: Now used as the Dot Operator
  '፤': ';',     // Statement terminator
  '፡': ':',     // Colon
  '፦': ':',     // Preface colon
  '፣': ',',     // Comma

  // --- Math / ሒሳብ ---
  'ሒሳብ': 'Math',
  'ጣራ': 'ceil',
  'ወለል': 'floor',
  'ዘፈቀደ': 'random',
  'ፍጹም': 'abs',
  'ኃይል': 'pow',
  'ሥር': 'sqrt',

// --- Numbers ---
  '፟': '0', '፩': '1', '፪': '2', '፫': '3', '፬': '4', '፭': '5',
  '፮': '6', '፯': '7', '፰': '8', '፱': '9', '፲': '10', '፳': '20',
  '፴': '30', '፵': '40', '፶': '50', '፷': '60', '፸': '70', '፹': '80', '፺': '90',
  '፻': '100', '፼': '10000',  
  // --- Built-in Utilities ---
  'ያትም': 'console.log',
  'ማንቂያ': 'alert',
  'ጊዜጠባቂ': 'async'
};

module.exports = JANO_KEYWORDS;