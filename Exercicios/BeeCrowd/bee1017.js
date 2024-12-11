var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var tempoGasto = lines[0];
var velocidadeMedia = lines[1];
var kml = 12
var distaciaPercorrida = tempoGasto * velocidadeMedia
var litro = distaciaPercorrida/ kml
console.log(`${litro.toFixed(3)}`)