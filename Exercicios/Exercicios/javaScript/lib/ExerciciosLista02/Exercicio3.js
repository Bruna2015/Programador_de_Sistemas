function somar(num1, num2) {
    // Convertendo os valores para números, caso sejam strings
    let resultado = Number(num1) + Number(num2);
    return resultado;
  }
  
  // Exemplos de uso:
  let soma1 = somar(4, 5);
  console.log(soma1); // Saída: 9
  
  let soma2 = somar(10, 15);
  console.log(soma2); // Saída: 25
  
  let soma3 = somar("-3", "7");
  console.log(soma3); // Saída: 4