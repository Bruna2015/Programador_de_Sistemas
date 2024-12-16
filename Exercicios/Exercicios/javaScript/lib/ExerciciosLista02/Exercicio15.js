function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
  }
  let resultado1 = celsiusParaFahrenheit(25);
  console.log(resultado1); // Saída: 77
  
  let resultado2 = celsiusParaFahrenheit(0);
  console.log(resultado2); // Saída: 32
  
  let resultado3 = celsiusParaFahrenheit(-10);
  console.log(resultado3); // Saída: 14