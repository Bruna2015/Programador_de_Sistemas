
var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.trim().split('\n');


const arr = [a, b, c, d, e] = lines.map(Number).filter((val) => val % 2 === 0)


console.log(`${arr.length} valores pares`)
