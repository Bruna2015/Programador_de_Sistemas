var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split(' ');
// console.log(lines)var 

// Leia 4 valores inteiros A, B, C e D. A seguir, se B for maior do que C e se D for 
// maior do que A, e a soma de C com D for maior que
//  a soma de A e B e se C e D,
//  ambos, forem positivos e se a variável A for par escrever a 
//  mensagem "Valores aceitos", senão escrever "Valores nao aceitos".


var a = Number(lines[0]);
var b = Number(lines[1]);
var c = Number(lines[2]);
var d = Number(lines[3]);

if (b > c && d > a && (c + d) > (a + b) && c > 0 && d > 0 && a % 2 === 0) {
    console.log(`Valores aceitos`);
} else {console.log("Valores nao aceitos")}
