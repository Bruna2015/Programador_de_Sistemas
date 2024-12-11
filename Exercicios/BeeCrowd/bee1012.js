var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

let [A,B,C] = lines[0].split(" ");
let pi = 3.14159;

A = Number(A);
B = Number(B);
C = Number(C);

let trianguloRetangulo = (A * C) / 2;
let circulo = pi * Math.pow(C,2);
let trapezio = ((A + B) * C) / 2;
let quadrado = B * B;
let retangulo = A * B;

console.log("TRIANGULO: " + trianguloRetangulo.toFixed(3));
console.log("CIRCULO: " + circulo.toFixed(3));
console.log("TRAPEZIO: " + trapezio.toFixed(3));
console.log("QUADRADO: " + quadrado.toFixed(3));
console.log("RETANGULO: " + retangulo.toFixed(3));
