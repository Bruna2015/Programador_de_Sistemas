function divisaoInteira(dividendo, divisor) {
    // A operação de divisão inteira em JavaScript é feita usando o operador 'Math.floor()'
    let resultado = Math.floor(dividendo / divisor);
    return resultado;
  }
  
  // Exemplos de uso:
  let resultado1 = divisaoInteira(10, 3);
  console.log(resultado1); // Saída: 3
  
  let resultado2 = divisaoInteira(9, 3);
  console.log(resultado2); // Saída: 3
  
  let resultado3 = divisaoInteira(9, 2);
  console.log(resultado3); // Saída: 4
  
  let resultado4 = divisaoInteira(7, 5);
  console.log(resultado4); // Saída: 1
  
  let resultado5 = divisaoInteira(0, 5);
  console.log(resultado5); // Saída: 0