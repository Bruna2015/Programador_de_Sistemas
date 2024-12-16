function volumeEsfera(raio) {
    const pi = 3.14159;
    return (4/3) * pi * Math.pow(raio, 3);
  }
  let resultado1 = volumeEsfera(3);
  console.log(resultado1); // Saída: 113.0973
  let resultado2 = volumeEsfera(5);
  console.log(resultado2); // Saída: 523.5988
  let resultado3 = volumeEsfera(1.5);
  console.log(resultado3); // Saída: 14.1372