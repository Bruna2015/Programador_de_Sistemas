var input = require('fs').readFileSync('./input.txt', 'utf8');
var N = Number(input); 

const cedulas = [100, 50, 20, 10, 5, 2, 1];

console.log(N);


for(let i=0; i < cedulas.length; i++) {
    let nota = cedulas[i];

    var count = Math.floor(N/nota); N %= nota;
    console.log(`${count} nota(s) de R$ ${nota},00`);
}


// var N100 = Math.floor(N/100);
// N %= 100;
// console.log(N + "nota (s) de R$100,00");

// var N50 = Math.floor(N/50)
// N %= 50;
// console.log(N + "nota (s) de R$50,00");

// var N20 = Math.floor(N/20);
// N %= 20;
// console.log(N + "nota (s) de R$20,00");

// var N10 = Math.floor(N/10);
// N %= 10;
// console.log(N + "nota (s) de R$10,00");

// var N5 = Math.floor(N/5);
// N %= 5;
// console.log(N + "nota (s) de R$5,00");

// var N2 = Math.floor(N/2)
// N %= 2;
// console.log(N + "nota (s) de R$2,00");

// var N1 = Math.floor(N/1)
// N %= 1;
// console.log(N + "nota (s) de R$1,00");

// Não finalizado