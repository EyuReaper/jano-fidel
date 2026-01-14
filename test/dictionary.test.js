const assert = require('assert');

const JANO_KEYWORDS = require('../src/dictionary');

describe('JANO_KEYWORDS Dictionary', () => {
    it('should load the dictionary successfully', () => {
        assert.ok(JANO_KEYWORDS, 'Dictionary should not be null or undefined');
        assert.ok(Object.keys(JANO_KEYWORDS).length > 0, 'Dictionary should not be empty');
    });

    it('should contain expected variable keywords', () => {
        assert.strictEqual(JANO_KEYWORDS['ይሁን'], 'let');
        assert.strictEqual(JANO_KEYWORDS['ቋሚ'], 'const');
    });

    it('should contain expected function/class keywords', () => {
        assert.strictEqual(JANO_KEYWORDS['ተግባር'], 'function');
        assert.strictEqual(JANO_KEYWORDS['መደብ'], 'class');
        assert.strictEqual(JANO_KEYWORDS['ግንባታ'], 'constructor');
        assert.strictEqual(JANO_KEYWORDS['ቃልኪዳን'], 'Promise');
    });

    it('should contain expected control flow keywords', () => {
        assert.strictEqual(JANO_KEYWORDS['ከሆነ'], 'if');
        assert.strictEqual(JANO_KEYWORDS['መልስ'], 'return');
    });

    it('should contain expected Math keywords', () => {
        assert.strictEqual(JANO_KEYWORDS['ሒሳብ'], 'Math');
        assert.strictEqual(JANO_KEYWORDS['ጣራ'], 'ceil');
    });

    it('should contain expected module keywords', () => {
        assert.strictEqual(JANO_KEYWORDS['ክፍል'], 'module');
        assert.strictEqual(JANO_KEYWORDS['ጠይቅ'], 'require');
        assert.strictEqual(JANO_KEYWORDS['ውጤት'], 'exports'); // Assuming 'ውጤት' maps to 'exports'
    });

    it('should handle special characters like dot operator', () => {
        assert.strictEqual(JANO_KEYWORDS['።'], '.');
    });
});