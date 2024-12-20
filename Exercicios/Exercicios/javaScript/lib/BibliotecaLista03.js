
    export const verificarPar = (a) => a % 2 === 0

    
    // exer 1
    export function avaliarMedia(media) {
    if (media >= 7 && media <= 10 ) {
        return "Aprovado"
    } 
    else if (media < 7 && media >= 0) {
        return "Reprovado"
    }
    else {    return "Nota invalida"
    }
}
    // exer 2
    export function imparOuPar(x) {
        return verificarPar ? "par" : "impar"
    }
    // exer 3
    export function positivo(num) {
        if (num > 0) {
           return "Positivo"
       }
       else if (num < 0) {
           return "Negativo"
       }
           return "Zero"  
   }
    // exer  4
    export function menorNumero(num1, num2, num3) {
        var menor = num1 
    
         if (num2 < menor) menor = num2
         
         if (num3 < menor) menor = num3
         
       return menor
    }
    // exer 5
    export function maiorNumero(num1, num2, num3) {
        
        if (num2 > num1) num1 = num2
        
        if (num3 > num1) num1 = num3
        
        return num1
        
    }
    // exer 6
    export function multiplos(x, y) {
        if (x % y == 0){
           return true
        }
        else {
           return false
        }
     }
    // exer 7
    export function bissexto(ano) {
        if (ano % 4 == 0 && ano % 100 != 0 || (ano % 400 == 0)) {
           return true
        }
        return false
     }
     
    // exer 8
    export function vogal(letra) {
        if (letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u") {
           return "Vogal"
        }
        return "Consoante"
     }
    // exer 9
    export function sa(nota) {
        if (nota >= 90 && nota <= 100) {
            return "A"
         }
        else if (nota >= 80 && nota <= 89) {
            return "B"
        }
        else if (nota >= 70 && nota <= 79) {
            return "C"
        }
        else if (nota >= 60 && nota <= 69 ) {
            return "D"
        }
        else if (nota < 60 && nota >= 0){
            return "F"
        }
        return "Nota invalida"
     }
     
    // exer 10
    export function contarAteN(n) {
        var x = 0, soma = 0
        while (x <= n) {
            soma += x
            x++
        }
        return soma
    }
    // exer 11
    export function fatorial(n) {
        var x = 1, fator = 1
        while (x <= n ) {
            // fator = x * n
            fator *= x
            x++
            
        }
        return fator
    }
    
    // exer 12
    export function tabuada(x) {
        for (var m = 0; m <= 10; m++) {
            var p = x * m
            console.log(`${x} x ${m} = ${p}`)
        }
        console.log("===========")
    }
    
    // exer 13
    export function imprimirTabuada() {
        for (var n = 1; n <= 10; n++) {
                for (var k = 0; k <= 10; k++) {
                        console.log(`${n} x ${k} = ${n*k}`)
                    }    
                    console.log("\n===============\n")
                }
    }
    // exer 14
    export function primo(np) {
        if (np < 2) return false;
    
        // if (np == 2 ) { 
        //     return true
        // }
     for (var i = 2; i < np; i++) {
        if (np % i == 0 ) return false;
    }
        return true
    }
    

































