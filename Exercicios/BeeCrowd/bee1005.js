var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var A = lines[0];
var B = lines[1];

var MEDIA = ( A * 3.5 + B * 7.5)/11.0;

console.log("MEDIA = " + MEDIA.toFixed(5) )