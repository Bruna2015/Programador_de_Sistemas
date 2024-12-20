import { soma } from "../lib/biblioteca_lista2.js"


//exer 9*
 export function somarLista(arr) {
    let res = arr.map(Number).reduce(soma, 0)
    return res
}
// exer 11
 export function mediaLista(arr) {
    const soma = arr.reduce (
        (acumulador, valorAtual) => acumulador + valorAtual / arr.length, 
        0)
    return parseInt(soma)
    
    }
// exer 12
export function somarArr(arr) {
    var res = arr.toString().split('').map(Number).reduce(
        (acc, cur) => acc + cur,
        0
    )
    return res
}

// exer 13
export function maior(a) {
    var max = Math.max(...a)
    return max
    }
// exer 14
export function concatenar(b) {
    var x = b.split(' ')
    var res = x[0].concat(x[1])
    console.log(res)
    }
    
// exer 15

export function inverter(a) {
    var r = a.split('').reverse().join('')
    return r
}

// exer 16
export function verificarPalindromo(a) {
    var r = a
    var res = a.split('').reverse().join('')
    return r === res
}


// exer 17
export function ssa(fras) {
    var abc = "abcdefghijklmnopqrstuvwxyz".split('')
    var frase = fras
for (i = 0; i < abc.length; i++) {
    if (frase.includes(abc[i])) {
        return false 
    } else {
        return true
    }
    }
}
// exer 18
export function vogal(x) {
    var vogais = "aeiou".split('')
    let k = 0
    for (i = 0; i < x.length; i++) {
        if (x.includes(vogais[i])) {
            k++
        }
    }
    return k
}

// exer 19
export function anagrama(var1, var2) {
    var p = var1.split('').sort().join()
    var l = var2.split('').sort().join()
    return p === l 
}






