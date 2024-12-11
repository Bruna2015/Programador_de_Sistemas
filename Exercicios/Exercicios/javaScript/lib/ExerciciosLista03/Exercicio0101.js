function separadorTexto(texto,separador) {

    var resultado = texto.split(separador)
    return resultado
}
console.log(separadorTexto("O rato roeu a roupa do rei de Roma", ""))
console.log(separadorTexto("Ana Maria,Paulo Coelho,Carla", ","))
console.log(separadorTexto("fulano@gmail.com;ciclano@yahoo.com;beltrano@outlook.com", ';'))
console.log(separadorTexto("Nome -- Sobrenome -- Idade -- País", "--"))
console.log(separadorTexto("/usr/local/bin", '\.'))
console.log(separadorTexto("JavaScript", "  "))
console.log(separadorTexto("O sol está brilhando. O céu está azul. É um ótimo dia!", " . "))
console.log(separadorTexto("15/08/2024", " / "))
console.log(separadorTexto("14:35:20", ":"))

