var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var totaldesegundos = lines[0];

var horasqt = totaldesegundos / 3600;
totaldesegundos = totaldesegundos % 3600;

var minutosqt = totaldesegundos / 60;
totaldesegundos = totaldesegundos % 60;

var segundosqt = totaldesegundos;

console.log(Math.floor(horasqt) + ":" + Math.floor(minutosqt) + ":" + Math.floor(segundosqt))