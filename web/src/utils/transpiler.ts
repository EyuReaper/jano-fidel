import JANO_KEYWORDS from './dictionary.js';

export function transpileJanoToJs(code: string): string {
  let result = code;

  Object.entries(JANO_KEYWORDS).forEach(([janoKeyword, jsKeyword]) => {
    const regex = new RegExp(`\\b${janoKeyword}\\b`, 'g');
    result = result.replace(regex, jsKeyword);
  });

  return result;
}

export const sampleJanoCode = `ይሁን መልዕክት = "ሰላም ዓለም!";

ተግባር ሰላምበል(ስም) {
  ከሆነ (ስም) {
    ያትም("ሰላም, " + ስም);
  } ያለበለዚያ {
    ያትም(መልዕክት);
  }
  መመለስ እውነት;
}

ሰላምበል("ጃኖ ፊደል");`;
