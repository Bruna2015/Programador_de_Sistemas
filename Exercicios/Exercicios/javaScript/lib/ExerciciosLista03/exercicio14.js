function Primo(numero) {
    if (numero <= 1) {
      return false; // 1 e números menores não são primos
    }
    if (numero <= 3) {
      return true; // 2 e 3 são primos
    }
    if (numero % 2 === 0 || numero % 3 === 0) {
      return false; // Divisível por 2 ou 3
    }
  
    let i = 5;
    while (i * i <= numero) {
      if (numero % i === 0 || numero % (i + 2) === 0) {
        return false;
      }
      i += 6;
    }
  
    return true;
  }
  
  // Testando a função
  console.log(Primo(7));   // Saída: true
  console.log(Primo(10));  // Saída: false
  console.log(Primo(13));  // Saída: true
  console.log(Primo(0));   // Saída: false
  console.log(Primo(1));   // Saída: false
  console.log(Primo(2));   // Saída: true
  console.log(Primo(6));   // Saída: false