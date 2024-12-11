function removerEspacos(str) {
    return str.replace(/\s+/g, '');  
}
console.log(removerEspacos("hello world")); 
console.log(removerEspacos(" a b c "));     
console.log(removerEspacos(" "));           