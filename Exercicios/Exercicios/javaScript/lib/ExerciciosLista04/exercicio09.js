const lista = [2, 4, 6, 8]
function soma(a, b){
  return a + b;
}

const total = lista.reduce(soma, 0);

console.log(lista)