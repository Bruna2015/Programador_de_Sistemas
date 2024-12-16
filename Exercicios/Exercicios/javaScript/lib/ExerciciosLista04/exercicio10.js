function somaPares(arr) {
    return arr.filter(num => num % 2 === 0)  
              .reduce((soma, num) => soma + num, 0); 
}

console.log(somaPares([1, 2, 3, 4, 5])); 
console.log(somaPares([2, 4, 6, 8]));    
console.log(somaPares([1, 3, 5, 7]));   