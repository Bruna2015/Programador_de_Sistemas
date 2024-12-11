var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var distancia = lines[0];

var  tempoDistancia = distancia * 2

console.log(tempoDistancia + " minutos")