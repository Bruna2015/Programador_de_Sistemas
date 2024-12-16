var palavra = "listen"
var palavra2 = "silent"

function Anagrama(texto1,texto2){
    caabe = texto1.split('').sort().join('')
    maca = texto2.split('').sort().join('')
return caabe === maca
}
console.log(Anagrama(palavra,palavra2))