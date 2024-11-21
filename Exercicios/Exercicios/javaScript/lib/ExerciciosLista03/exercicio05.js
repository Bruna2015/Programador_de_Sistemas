function encontrarMaior(num1, num2, num3) {
  let maior = num1; // Inicializamos com o primeiro número

  // Comparamos o primeiro número com os outros dois
  if (num2 > maior) {
    maior = num2;
  }
  if (num3 > maior) {
    maior = num3;
  }

  return maior;
}

// Exemplos de uso:
console.log(encontrarMaior(3, 7, 5)); // Saída: 7
console.log(encontrarMaior(-1, -5, -3)); // Saída: -1
console.log(encontrarMaior(8, 2, 10)); // Saída: 10