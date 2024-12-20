
var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split('\n');
// console.log(lines)var 

var x = Number(lines[0])

if (x >= 0 && x <= 400)  {
    var res = x * 1.15
    var reajuste = res - x 
    var Porcentual = "15 %" 
} else if (x > 400 && x <= 800)  {
    var res = x * 1.12
    var reajuste = res - x 
    var Porcentual = "12 %" 
} else if (x > 800 && x <= 1200)  {
    var res = x * 1.10
    var reajuste = res - x 
    var Porcentual = "10 %" 
} else if (x > 1200 && x <= 2000)  {
    var res = x * 1.07
    var reajuste = res - x 
    var Porcentual = "7 %" 
} else if (x > 2000)  {
    var res = x * 1.04
    var reajuste = res - x 
    var Porcentual = "4 %" 
} 
// Novo salario: 460.00
// Reajuste ganho: 60.00
// Em percentual: 15 %


console.log(`Novo salario: ${res.toFixed(2)}\nReajuste ganho: ${reajuste.toFixed(2)}\nEm percentual: ${Porcentual}`)
