function classificarAluno(media) {
    if (media >= 7.0) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }
  
  // Testando a função com todos os cenários:
  console.log(classificarAluno(10));  // Saída: Aprovado
  console.log(classificarAluno(7.0));  // Saída: Aprovado
  console.log(classificarAluno(6.95));  // Saída: Reprovado
  console.log(classificarAluno(8.8));  // Saída: Aprovado
  console.log(classificarAluno(0));  // Saída: Reprovado
  console.log(classificarAluno(2.725));  // Saída: Reprovado