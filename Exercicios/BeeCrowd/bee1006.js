var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var A = lines[0];
var B = lines[1];
var C = lines[2];

var MEDIA = ( A * 2 + B * 3 + C * 5 )/10.0;

console.log("MEDIA = " + MEDIA.toFixed(1) )