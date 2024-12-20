var input = require('fs').readFileSync('./input.txt', 'utf8');
// console.log(input)
var lines = input.split('\n');
// console.log(lines)var 


var notas = lines[0].split(' ')
// var exame = lines[3].split('\n')
var n1 = Number(notas[0])
var n2 = Number(notas[1])
var n3 = Number(notas[2])
var n4 = Number(notas[3])
var notaExame = Number(lines[1])

// console.log(lines)
// console.log(exames)

var media = (n1 * 2 + n2 * 3 + n3 * 4 + n4 * 1) / 10

var exame = (notaExame + media) / 2 


if (media >= 7) {
    console.log(`Media: ${media.toFixed(1)}\nAluno aprovado.`)
} else if (media < 5 ) {
    console.log(`Media: ${media.toFixed(1)}\nAluno reprovado.`)
} else if (media >=5 && media <= 6.9 && exame > 5) {
    console.log(`Media: ${media.toFixed(1)}\nAluno em exame.\nNota do exame: ${notaExame.toFixed(1)}\nAluno aprovado.\nMedia final: ${exame.toFixed(1)}`)
} else {}
