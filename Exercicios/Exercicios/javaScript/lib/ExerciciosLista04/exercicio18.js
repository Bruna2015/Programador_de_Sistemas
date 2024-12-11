function contar(str) {

    let vogais = str.toLowerCase().match(/[aeiou]/g);
    
    return vogais ? vogais.length : 0;
}
console.log(contar("hello"));      
console.log(contar("javascript"));  
console.log(contar("aeiou"));       