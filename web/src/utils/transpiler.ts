import JANO_KEYWORDS from './dictionary.js';

export function transpileJanoToJs(code: string): string {
  return code;
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
