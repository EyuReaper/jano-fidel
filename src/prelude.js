/**
 * ጃኖ ፊደል (Jano Fidel) - Prelude (Standard Library)
 */

// 1. Node.js safe aliases (only things that exist in Node)
const ሒሳብ = Math;
const ጃነማ = JSON;
const ቀን = Date;
const ቃልኪዳን = Promise;
const ያትም = console.log;

// 2. Export the template for the transpiler
// We put 'ማንቂያ' inside the string so it doesn't crash the Node.js process
const JANO_PRELUDE = `
    const ሒሳብ = Math;
    const ጃነማ = JSON;
    const ቀን = Date;
    const ቃልኪዳን = Promise;
    const ያትም = console.log;
    const ማንቂያ = (typeof alert !== 'undefined') ? alert : console.log;
    
    // Global function aliases
    const ቆይ = setTimeout;

    // Safety Check for Prototypes
    if (!Array.prototype.hasOwnProperty('ርዝመት')) {
        Object.defineProperty(Array.prototype, 'ርዝመት', { 
            get: function() { return this.length; },
            configurable: true 
        });
    }
    
    if (!String.prototype.hasOwnProperty('ርዝመት')) {
        Object.defineProperty(String.prototype, 'ርዝመት', { 
            get: function() { return this.length; },
            configurable: true 
        });
    }

    if (!Date.prototype.ወደ_ጽሑፍ) {
        Date.prototype.ወደ_ጽሑፍ = Date.prototype.toDateString;
    }
`;

module.exports = { JANO_PRELUDE };