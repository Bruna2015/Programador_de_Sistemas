 var carro1= {
    velocidade: 0 
};
var carro2= {
    velocidade: 0 
};

function acelerar(carro) {
    carro.velocidade += 5;
}


function frear(carro) {
    carro.velocidade -= 13;

    if(carro.velocidade < 0) {
        carro.velocidade = 0;
    }

}

while (carro1.velocidade < 80) acelerar(carro1);
console.log(carro1)
while (carro1.velocidade > 59) frear(carro1);
console.log(carro1)
while (carro1.velocidade > 0) frear(carro1);
console.log(carro1)

while (carro2.velocidade < 110) acelerar(carro2);
console.log(carro2)
while (carro2.velocidade > 80) frear(carro2);
console.log(carro2)
while (carro2.velocidade < 110) acelerar(carro2);
console.log(carro2)
while (carro2.velocidade > 0) frear(carro2);
console.log(carro2)

console.table([carro1,carro2]); 

