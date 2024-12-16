import { verificarAnoBissexto } from "./testemodulo01.js"; 

  console.log(verificarAnoBissexto(2020));  // Saída: true
  console.log(verificarAnoBissexto(2024));  // Saída: true
  console.log(verificarAnoBissexto(1999));  // Saída: false
  console.log(verificarAnoBissexto(2014));  // Saída: false
  console.log(verificarAnoBissexto(2025));  // Saída: false
  console.log(verificarAnoBissexto(1900));  // Saída: false
  console.log(verificarAnoBissexto(2000));  // Saída: true
  console.log(verificarAnoBissexto(2100));  // Saída: false
  console.log(verificarAnoBissexto(1600));  // Saída: true