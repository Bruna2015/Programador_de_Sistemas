var input = require('fs').readFileSync('./input.txt', 'utf8');
//console.log(input);
var lines = input.split('\n');
//console.log(lines)

let a = lines [0];
let b = lines [1];

console.log(`X = ${Number(a) + Number(b)}`);
