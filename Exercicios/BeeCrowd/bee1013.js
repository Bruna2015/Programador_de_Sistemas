var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n');

let [A,B,C] = lines[0].split(" ");
A = Number(A);
B = Number(B);
C = Number(C);

let MaiorValor = Math.max(A, B, C);

console.log(MaiorValor , "eh o maior")