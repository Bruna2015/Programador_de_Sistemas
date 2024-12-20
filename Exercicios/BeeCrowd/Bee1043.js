var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split(' ');
 
var x = Number(lines[0])
var y = Number(lines[1])
var z = Number(lines[2])

if (y + z < x) {
    var trg = (y * x) / 2
    console.log(`Area = ${trg.toFixed(1)}`)
}
// console.log()
