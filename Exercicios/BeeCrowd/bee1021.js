var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n'); 

var valor1 = lines[0];
console.log(valor1);

var valor2 = lines[1];
console.log(valor2);

var notas = lines[0];
console.log(notas + "nota (s) de R$100.00");
valor1 = valor1 % 100

var notas = lines[0];
console.log(notas + "nota (s) de R$50.00");
valor1 = valor1 % 50

var notas = lines[0];
console.log(notas + "nota (s) de R$20.00");
valor1 = valor1 % 20

var notas = lines[0];
console.log(notas + "nota (s) de R$10.00");
valor1 = valor1 % 10

var notas = lines[0];
console.log(notas + "nota (s) de R$5.00");
valor1 = valor1 % 5

var notas = lines[0];
console.log(notas + "nota (s) de R$2.00");
valor1 = valor1 % 2

var moedas = lines[1]
console.log(moedas + "moeda (s) de R$1.00");
valor2 = valor2 % 0.1

var moedas = lines[1]
console.log(moedas + "moeda (s) de R$0.25");
valor2 = valor2 % 0.50

var moedas = lines[1]
console.log(moedas + "moeda (s) de R$0.10");
valor2 = valor2 % 0.10

var moedas = lines[1]
console.log(moedas + "moeda (s) de R$0.05");
valor2 = valor2 % 0.05

var moedas = lines[1]
console.log(moedas + "moeda (s) de R$0.01");
valor2 = valor2 % 0.01