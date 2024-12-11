var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var X = lines[0];
var Y = lines[1];

var consumomedio = X / Y

console.log(`${consumomedio.toFixed(3)} km/l`)