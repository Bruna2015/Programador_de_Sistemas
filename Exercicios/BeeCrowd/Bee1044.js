var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split(' ');
 
var x = Number(lines[0])
var y = Number(lines[1])

if (y % x === 0 || x % y === 0) {
    console.log("Sao Multiplos")
} else
{console.log("Nao sao Multiplos")}
