const { convertEthiopicToArabic } = require('./engine');

const tests = [
    { input: '፩', expected: '1' },
    { input: '፲', expected: '10' },
    { input: '፻', expected: '100' },
    { input: '፲፪፻፳፩', expected: '1221' },
    { input: '፼', expected: '10000' }
];

tests.forEach(t => {
    const result = convertEthiopicToArabic(t.input);
    if (result === t.expected) {
        console.log(`✅ Pass: ${t.input} -> ${result}`);
    } else {
        console.error(`❌ Fail: ${t.input} expected ${t.expected} but got ${result}`);
    }
});