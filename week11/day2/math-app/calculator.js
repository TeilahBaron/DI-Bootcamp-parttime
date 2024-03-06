// calculator.js

const _ = require('lodash');
const math = require('./math');

// Perform calculations
const sum = math.add(5, 3);
const product = math.multiply(5, 3);
const squared = _.multiply(5, 5); // Use _.multiply for squaring a number

// Display results
console.log('Sum:', sum);
console.log('Product:', product);
console.log('Square of 5:', squared);
