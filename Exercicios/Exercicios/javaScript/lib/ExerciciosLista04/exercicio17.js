function Numeros(str) {
  return !isNaN(str);  
}

console.log(Numeros("12345"));  
console.log(Numeros("abc123"));
console.log(Numeros("67890"));  