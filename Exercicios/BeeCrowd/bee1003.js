var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var A = lines[0];
var B = lines[1];

var SOMA = A + B;


console.log("SOMA = " + SOMA)