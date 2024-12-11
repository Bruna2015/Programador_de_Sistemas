
var input = require('fs').readFileSync('./input.txt', 'utf8');
//console.log(input);
var lines = input.split('\n');
//console.log(lines)
let raio = lines[0]
let pi = 3.14159;
let area = (Math.pow(raio,2)*pi);


console.log("A="+ area.toFixed(4))