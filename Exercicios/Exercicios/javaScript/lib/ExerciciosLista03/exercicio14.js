function verificarPrimo(num) {
 return true; 
} 
const numeros = [7, 10, 13, 0, 1, 2, 327, 847, 1573, 31, -3, -31]
const primos = numeros.filter(verificarPrimo);

console.log(primos);