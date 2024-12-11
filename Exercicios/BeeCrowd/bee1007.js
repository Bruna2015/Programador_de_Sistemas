var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var A = lines[0];
var B = lines[1];
var C = lines[2];
var D = lines[3];

var DIFERENCA = (A * B - C * D);

console.log("DIFERENCA = " + DIFERENCA )