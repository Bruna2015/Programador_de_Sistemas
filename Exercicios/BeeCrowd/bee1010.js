var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var peca1= lines[0].split(' ');
var qtd1= Number(peca1[1]);
var valor1= Number(peca1[2]);

var peca2= lines[1].split(' ');
var qtd2= Number(peca2[1]);
var valor2= Number(peca2[2]);

var total= qtd1*valor1 + qtd2*valor2;

console.log(`VALOR A PAGAR: R$ ${total.toFixed(2)}`)