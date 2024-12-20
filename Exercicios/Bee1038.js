var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split(' ');

var lanche = Number(lines[0])
var qtd = Number(lines[1])

if (lanche === 1) {
    valor = 4 * qtd
} 

else if (lanche === 2) {
    valor = 4.50 * qtd
} 

else if (lanche === 3) {
    valor = 5 * qtd
} 

else if (lanche === 4) {
    valor = 2.0 * qtd
} 

else if (lanche === 5) {
    valor = 1.5 * qtd
}
console.log(`Total: R$ ${valor.toFixed(2)}`)
