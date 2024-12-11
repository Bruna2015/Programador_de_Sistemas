function somaDosDigitos(num) {
    let soma = 0;
    let numStr = num.toString();  

    for (let i = 0; i < numStr.length; i++) {
        soma += parseInt(numStr[i], 10);  
    }
    
    return soma;
}

console.log(somaDosDigitos(123));         
console.log(somaDosDigitos(456789));      
console.log(somaDosDigitos(8423416542984721)); 