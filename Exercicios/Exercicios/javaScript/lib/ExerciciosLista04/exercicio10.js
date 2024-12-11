function simplestest(flag) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) { 
            soma += arr[i];
        }
    }
    return soma;
}
console.log(somaPares([1, 2, 3, 4, 5]));  
console.log(somaPares([2, 4, 6, 8]));     
console.log(somaPares([1, 3, 5, 7]));     