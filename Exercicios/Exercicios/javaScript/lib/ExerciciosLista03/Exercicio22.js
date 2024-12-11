var brasilia = {
    cor: "Amarela",
    velocidade: 0,
    acelerar: function() {
        this.velocidade += 5;

        console.log("Brasilia Amarela a " + this.velocidade + "Km por hora!");
        
}
    }
    var pampa = {
        cor: "Rosa",
        velocidade: 0,
        acelerar: function() {
            this.velocidade += 15;
    
            console.log("Pampa Rosa a " + this.velocidade + "Km por hora!");
        }
    }

    frear:function() {
        if(this.velocidade < 0) {
            this.velocidade = 0;
        }

    console.log("Reduzir velocidade para " + this.velocidade + "km/h"); 
}
console.log("/t")

imprimir:function() {console.table(this); }

while (brasilia < 80) acelerar(brasilia);
console.log(brasilia)
while (brasilia > 59) frear(brasilia);
console.log(carrobrasi)
while (brasilia > 0) frear(brasilia);
console.log(brasilia)

while (pampa < 110) acelerar(pampa);
console.log(pampa)
while (pampa> 80) frear(pampa);
console.log(pampa)
while (pampa < 110) acelerar(pampa);
console.log(pampa)
while (pampa > 0) frear(pampa);
console.log(pampa)

console.table([brasilia,pampa]); 