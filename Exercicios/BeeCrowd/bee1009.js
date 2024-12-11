var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var nome = lines[0].split(' ');
var salariofixo = lines[1];
var montante = lines[2];

var comissao = montante * 0.15;
var salariofinal= salariofixo * comissao;



console.log(`TOTAL = R$ ${salariofinal.toFixed(2)}`)