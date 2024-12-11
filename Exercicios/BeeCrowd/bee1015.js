var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var x1y1 = lines[0].split(" ");
var x2y2 = lines[1].split(" ");

var x1 = x1y1.lines[0];
var y1 = x1y1.lines[1];

var x2 = x2y2.lines[0];
var y2 = x2y2.lines[1];

var distancia = Math.sqrt(Math.pow(x2-x1,2) + Math.pow(y2-y1,2));

console.log(distancia.toFixed(4))

// Não finalizado