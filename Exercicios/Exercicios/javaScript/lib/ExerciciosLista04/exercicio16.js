
function Palindromo(str) {
 
  let str1 = str.toLowerCase().replace();
  
  let str2 = str1.split('').reverse().join('');
  
  return str1 === str2;
}
console.log(Palindromo("racecar"));  
console.log(Palindromo("hello"));    
console.log(Palindromo("madam"));    