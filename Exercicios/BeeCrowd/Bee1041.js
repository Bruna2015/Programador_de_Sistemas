var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split('\n');
// console.log(lines)var 

var x = Number(lines[0])
var y = Number(lines[1])

if (x > 0 && y > 0) {console.log("Q1")}
    else if (x > 0 && y < 0) {console.log("Q2")}
    else if (x < 0 && y < 0) {console.log("Q3")}
    else if (x < 0 && y > 0) {console.log("Q4")}
