var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var A = lines[0]
var B = lines[1]

var PROD = (A * B);

console.log("PROD = " + PROD)

