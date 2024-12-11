function maiorNumero(arr) {
    if (arr.length === 0) {
        return -Infinity;  
    }
    return Math.max(...arr);  
}
console.log(maiorNumero([1, 2, 3, 4, 5]));          
console.log(maiorNumero([-1, -2, -3, -4, -5]));     
console.log(maiorNumero([10, 20, 30, 40, -50]));    
console.log(maiorNumero([]));                       