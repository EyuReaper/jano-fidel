import JANO_KEYWORDS from './dictionary'; // Changed to .ts, implicit

export function transpileJanoToJs(code: string): string {
  let transpiledCode = code;

  // Get all Jano Fidel keywords and sort them by length in descending order
  // This ensures that longer keywords are replaced before their shorter substrings
  const sortedKeywords = Object.keys(JANO_KEYWORDS).sort((a, b) => b.length - a.length);

  for (const janoKeyword of sortedKeywords) {
    const jsEquivalent = JANO_KEYWORDS[janoKeyword];

    // Create a regular expression for the keyword.
    // Use word boundaries for most keywords, but not for punctuation.
    // Escape special regex characters in the keyword.
    const escapedKeyword = janoKeyword.replace(/[.*+?^${}()|[\\]/g, '\\$&');
    let regex;

    // Punctuation marks that should not have word boundaries
    const punctuation = ['።', '፤', '፡', '፦', '፣'];

    if (punctuation.includes(janoKeyword)) {
      regex = new RegExp(escapedKeyword, 'g');
    } else {
      // Use \b for word boundaries. The 'i' flag for case-insensitivity might be needed
      // but based on dictionary.js, keywords are case-sensitive.
      // So, we'll stick to 'g' for global replacement.
      regex = new RegExp(`\\b${escapedKeyword}\\b`, 'g');
    }
    transpiledCode = transpiledCode.replace(regex, jsEquivalent);
  }

  return transpiledCode;
}

export const sampleJanoCode = `ይሁን መልዕክት = "ሰላም ዓለም!";

ተግባር ሰላምበል(ስም) {
  ከሆነ (ስም) {
    ያትም("ሰላም, " + ስም);
  } ካልሆነ {
    ያትም(መልዕክት);
  }
  መልስ እውነት;
}

ሰላምበል("ጃኖ ፊደል");`;