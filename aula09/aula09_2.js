// Exercicio: criar objeto de casa

const computador = {
    nome: "Notebook",
    marca: "Samsung",
    processador: "Core i5 8th Gen",
    ram: 8,
    armazenamento: 256,
    ativo: true,
}

computador.ligar = function() {
    console.log("Bem Vindo")
}
computador.desligar = function(){
    console.log("Desligando")
}

console.log(computador)