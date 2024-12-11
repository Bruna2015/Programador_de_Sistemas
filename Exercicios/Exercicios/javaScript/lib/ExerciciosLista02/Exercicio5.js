function calcularMedia(num1, num2, num3) {
    let soma = Number(num1) + Number(num2) + Number(num3);
    let media = soma / 3;
    return media;
  }
  
  // Exemplo de uso:
  let media1 = calcularMedia(10, 20, 30);
  console.log(media1); // Saída: 20
  
  let media2 = calcularMedia(5, 15, 25);
  console.log(media2); // Saída: 15
  
  let media3 = calcularMedia("2", "2", "2");
  console.log(media3); // Saída: 20