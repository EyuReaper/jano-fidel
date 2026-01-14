const assert = require('assert');

const { transpile, convertEthiopicToArabic } = require('../src/engine'); // Import convertEthiopicToArabic directly

describe('Ethiopic Numeral Conversion', () => {
    it('should correctly convert single Ethiopic digits to Arabic', () => {
        assert.strictEqual(convertEthiopicToArabic('፩'), '1');
        assert.strictEqual(convertEthiopicToArabic('፱'), '9');
    });

    it('should correctly convert Ethiopic tens to Arabic', () => {
        assert.strictEqual(convertEthiopicToArabic('፲'), '10');
        assert.strictEqual(convertEthiopicToArabic('፺'), '90');
    });

    it('should correctly convert compound Ethiopic numerals (additive)', () => {
        assert.strictEqual(convertEthiopicToArabic('፲፪'), '12');
        assert.strictEqual(convertEthiopicToArabic('፳፭'), '25');
    });

    it('should correctly convert compound Ethiopic numerals (multiplicative with 100)', () => {
        assert.strictEqual(convertEthiopicToArabic('፪፻'), '200');
        assert.strictEqual(convertEthiopicToArabic('፻'), '100');
    });

    it('should correctly convert complex Ethiopic numerals (e.g., 225)', () => {
        assert.strictEqual(convertEthiopicToArabic('፪፻፳፭'), '225');
    });

    it('should correctly convert compound Ethiopic numerals (multiplicative with 10000)', () => {
        assert.strictEqual(convertEthiopicToArabic('፪፼'), '20000');
        assert.strictEqual(convertEthiopicToArabic('፼'), '10000');
    });

    it('should correctly convert combined thousands and hundreds', () => {
        assert.strictEqual(convertEthiopicToArabic('፼፻'), '10100');
        assert.strictEqual(convertEthiopicToArabic('፪፼፳፻፶፮'), '22056');
        assert.strictEqual(convertEthiopicToArabic('፪፲፻'), '1200');
    });

    it('should handle zero (፟)', () => {
        assert.strictEqual(convertEthiopicToArabic('፟'), '0');
    });
});

describe('Jano Fidel Transpilation', () => {
    it('should transpile basic keywords correctly', () => {
        assert.strictEqual(transpile('ይሁን ቁጥር = ፲፤').includes('let ቁጥር = 10;'), true);
        assert.strictEqual(transpile('ቋሚ ስም = "ጃኖ"፤').includes('const ስም = "ጃኖ";'), true);
        assert.strictEqual(transpile('ተግባር ሰላም() { መልስ "ሰላም"፤ }').includes('function ሰላም() { return "ሰላም"; }'), true);
        assert.strictEqual(transpile('ከሆነ (እውነት) { ያትም("እውነት"); }').includes('if (true) { console.log("እውነት"); }'), true);
    });

    it('should handle comments without transpiling', () => {
        assert.strictEqual(transpile('// This is a comment\nይሁን x = ፩፤').includes('// This is a comment\nlet x = 1;'), true);
    });

    it('should handle strings without transpiling their content', () => {
        assert.strictEqual(transpile('ያትም("ይሁን")፤').includes('console.log("ይሁን");'), true);
    });

    it('should transpile Math keywords correctly', () => {
        assert.strictEqual(transpile('ያትም(ሒሳብ።ጣራ(፲፪።፭))፤').includes('console.log(Math.ceil(12.5));'), true);
        assert.strictEqual(transpile('ያትም(ሒሳብ።ወለል(፲፪።፭))፤').includes('console.log(Math.floor(12.5));'), true);
    });

    it('should transpile Class and Promise keywords correctly', () => {
        assert.strictEqual(transpile('መደብ ሰው { ግንባታ() {} }').includes('class ሰው { constructor() {} }'), true);
        assert.strictEqual(transpile('አዲስ ቃልኪዳን()').includes('new Promise()'), true);
    });
});