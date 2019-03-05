var Negative = require('./negative');
var negative = new Negative();
var result = negative.analyze('Cats are stupid.');
console.dir(result);
var result2 = negative.analyze('A worthy opponent.');
console.dir(result2);
