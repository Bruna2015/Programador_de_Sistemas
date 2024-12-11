var input = require('fs').readFileSync('./input.txt', 'utf8');
var lines = input.split('\n'); 

var totaldias = lines[0];

var anos = totaldias / 365
totaldias = totaldias % 365

var meses = totaldias / 30
totaldias = totaldias % 30

var diasqt = totaldias


console.log(`${Math.floor(anos)} ano(s)`)
console.log(`${Math.floor(meses)} mes(es)`)
console.log(`${Math.floor(diasqt)} dia(s)`)