var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

var numerofuncionario = lines[0];
var horastrabalhadas = lines[1];
var salario = lines[2];

var SALARY = horastrabalhadas * salario;

console.log("NUMBER = " + numerofuncionario);
console.log("SALARY = U$" + SALARY.toFixed(2));