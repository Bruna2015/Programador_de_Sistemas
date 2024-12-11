var input = require('fs').readFileSync('./input.txt', 'utf8');
var N = Number(input); 

const cedulas = [N1, N2, D1, D2];

console.log(N);

var total = lines[0];

var soma = (N1*D2 + N2*D1) / (D1*D2)
var subtracao = (N1*D2 - N2*D1) / (D1*D2)
var multiplicacao = (N1*N2) / (D1*D2)
var divisao  = (N1*D2)/(N2*D1)

var = N1 / D1

for(let i=0; i < cedulas.length; i++) {
    let nota = cedulas[i];

    var count = Math.floor(N/nota); N %= nota;
    console.log(`${count} nota(s) de R$ ${nota},00`);
}
