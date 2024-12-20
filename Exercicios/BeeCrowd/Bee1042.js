var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split(' ');

var x = Number(lines[0])
var y = Number(lines[1])
var z = Number(lines[2])

var maior = Math.max(x, y, z)

var menor = Math.min(x, y, z)

if (x != menor && x != maior) {
    var meio = x
} if (y != menor && y != maior) {
    var meio = y
} if (z != menor && z != maior) {
    var meio = z
}

// console.log(meio)

console.log(`${menor}\n${meio}\n${maior}\n\n${x}\n${y}\n${z}`)
