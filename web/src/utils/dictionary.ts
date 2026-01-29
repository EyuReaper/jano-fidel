// web/src/utils/dictionary.ts
interface JanoKeywords {
  [key: string]: string;
}

const JANO_KEYWORDS: JanoKeywords = {
  // --- Variables & Constants ---
  'ተለዋጭ': 'var',      // Added: Traditional variable declaration
  'ይሁን': 'let',        // Block-scoped variable
  'ቋሚ': 'const',       // Constant
  'ይህ': 'this',         // Current context reference
  'ሰርዝ': 'delete',  //property deletion
  'ባዶነት': 'void',   //unary operator

  // --- Functions & Classes ---
  'ተግባር': 'function',
  'ግንባታ': 'constructor',
  'መልስ': 'return',
  'ፍታ': 'resolve',
  "መደብ": "class",
  'አዲስ': 'new',
  'ያራዝማል': 'extends',  // Updated: Logical for inheritance
  'የበላይ': 'super',     // Updated: Logical for "the one above"
  'አስገኝ': 'yield',      // Updated: Better DX for generators
  'ቀጣይ': 'next',
  'ድልድል': 'Array',
  'ርዝመት': 'length',
  'ግብዓቶች': 'arguments',
  'ቃልኪዳን': 'Promise',
  "ክፍል": "module",         // Module
  "ጠይቅ": "require",        // Require

  // --- Functional Array Methods ---
  'አጣራ': 'filter',
  'አጠቃልል': 'reduce',
  'አግኝ': 'find',
  'አንዳንድ': 'some',
  'ሁሉም': 'every',

  
  // --- Logic & Flow Control ---
  'ከሆነ': 'if',
  'ካልሆነ': 'else',
  'ምረጥ': 'switch',
  'ቢሆን': 'case',
  'መደበኛ': 'default',
  'ውጣ': 'break',
  'ቀጥል': 'continue',
  'አርም': 'debugger',
  'እና': '&&',
  'ወይም': '||',
  'አይደለም': '!',


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
  'ምልክት': 'Symbol',

  // --- Exception Handling ---
  'ሞክር': 'try',
  'ያዝ': 'catch',
  'በመጨረሻ': 'finally',
  'ወርዉር': 'throw',
  'ስህተት': 'Error',

  // --- Modules & Access Control (Strict/Future Use) ---
  'የጋራ': 'public',     // Updated: Intuitive for shared access
  // 'የግል': 'private',     // Hidden/Encapsulated
  'የተጠበቀ': 'protected',
  'ላክ': 'export',
  'ውጤት': 'exports',
  'አምጣ': 'import',
  'ከ': 'from',
  'እንደ': 'as',
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
  'ጊዜጠባቂ': 'async',
  'ዝግጁ': 'ready',
  'ግለጽ': 'eval',
  'ጠቁም': 'map',
  'አልተወሰነም': 'undefined',
  'ተዉ': 'reject',
  'ቁልፎች': 'keys',
  'እሴቶች': 'values',
  'መግቢያዎች': 'entries',

  // --- Additional Data Structures ---
  'ስብስብ': 'Set',
  'መዝገብ': 'Map',

  // --- Data Conversion & Global Objects ---
  'ጽሁፍ': 'String',
  'ቁጥር': 'Number',
  'ጃነማ': 'JSON',      // json means ጃነማ- ጃኖ ነገር ማስታወሻ 
  'ተንትን': 'parse',
  'ለውጥ': 'stringify',

  // --- State & Getters/Setters ---
  'ያዥ': 'get',
  'አስቀማጭ': 'set',

  // --- Async Timing ---
  'ቆይ': 'setTimeout',
  'ክፈት': 'setInterval',

  // --- Context & Meta ---
  'ሁላቀፍ': 'global',
  'ባህሪ': 'property',
  'ቀዳማይ': 'prototype',

  // --- Console Levels ---
  'አስጠንቅቅ': 'warn',
  'አሳብቅ': 'error',
  'ሰንጠረዥ': 'console.table',
  'አፅዳ': 'console.clear',
  
  //---Advanced numbers/Booleans
  'ቁጥር?': 'isNaN',

  // --- Structural ---
  'ተግብር': 'apply',
  'ጥራ': 'call',
  'እሰር': 'bind',

  // --- Text Manipulation (Critical for DX) ---
  'ሰንጥቅ': 'split',
  'ቁረጥ': 'slice',
  'ተካ': 'replace',
  'በትልቅ': 'toUpperCase',
  'በትንሽ': 'toLowerCase',

  // --- State Check ---
  'አለው': 'hasOwnProperty',

  // --- Math Constants ---
  'ቁጥር_አይደለም': 'NaN',
  'ወሰን_የለሽ': 'Infinity',

  // --- Object & State Management (Missing Pieces) ---
  'ቆልፍ': 'freeze',
  'ታሸገ': 'isFrozen',

  // --- Advanced Array Methods ---
  'ዘርጋ': 'flat',
  'ዘርጋመዝገብ': 'flatMap',
  'አባል': 'indexOf',

  // --- String Search Helpers ---
  'ይጀምራል': 'startsWith',
  'ይጨርሳል': 'endsWith',
  'አሳጥር': 'trim',

  // --- Global State ---
  'ሁላቀፍ_ነው': 'globalThis',

  // --- Meta-Programming & Descriptors ---
  'ባህሪ_ግለጽ': 'defineProperty',
  'መግለጫ': 'descriptor',

  // --- Network & Modern APIs ---
  'ጨልፍ': 'fetch',
  'አድራሻ': 'URL',
  'ራስ': 'header',

  // --- Search & Check ---
  'ባዶ_ነው?': 'isEmpty',
  'እኩል_ነው?': 'isEqual',

  // --- Date & Time ---
  'ቀን': 'Date',
  'አሁን': 'now',

  // --- Regular Expressions ---
  'መደበኛ_መግለጫ': 'RegExp',
  'ፈትሽ': 'test',

  // --- Performance & Debugging ---
  'አፈጻጸም': 'performance',
  'ጊዜ_ጀምር': 'time',
  'ጊዜ_አብቃ': 'timeEnd',

  //---- Binary Data & buffer-----
  'መረብ': 'buffer',
  'ውሂብ_እይታ': 'DataView',

  //---- Reflect ----
  'አንጸባርቅ': 'Reflect',
  
  //----Reflect API ---
  'ወኪል': 'Proxy',
  'ጥለፍ': 'trap',

  //-----Console Grouping ----
  'ቡድን': 'group',
  'ቡድን_ጨርስ':'groupEnd',

  // --- Miscellaneous ---
  'ስም_አልባ': 'anonymous', // For anonymous functions
  'ተጠቀም': 'use',
  'ያካትታል': 'includes',
  'ቅንብር': 'template',
  'ታላቅ_ቁጥር': 'BigInt',
  'ላላ_መዝገብ': 'WeakMap',
  'ላላ_ስብስብ': 'WeakSet'
  

};

export default JANO_KEYWORDS;