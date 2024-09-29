let serie = {   // objeto declarado com {}
    nome: "The Boys",
    genero: ["Ação", "Paródia", "Heróis"],
    temporadas: 4,
    status: "Em andamento",
    classificacao: 18,
    nrEpisodios: {
        temp1: 10,
        temp2: 10,
        temp3: 50
    },
    mostrarCaracteristicas: function(){
        return `O nome da série é: ${this.nome} e sua classificação é ${this.classificacao}`
    }
}

console.log(serie.mostrarCaracteristicas())

const prompt = require("prompt-sync")()
let valior

let livro = {
    nome: "A Guerra dos Tronos",
    genero: ["Romance", "Literatura fantástica", "Alta fantasia", "Ficção Política"],
    dataLancamento: 1996,
    autor: "George R. R. Martin",
    statusLeitura: "Em andamento",
    Paginas: 592,
    tipo: ["Digital", "Físico"],
    valor: {
        fisico: "R$100,00",
        digital: "R$30,00"
    },
    idioma: ["Português", "Español", "English"],
    comprar: function(){
        console.log(`Tipos: \n1. Físico: ${this.valor.fisico} \n2. Digital: ${this.valor.digital}`)
        valior = parseInt(prompt("Digite qual tipo: "))
        if (valior === 1){
            return `Pedido realizado para o livro ${this.nome} do autor ${this.autor} do tipo ${this.tipo[1]}\n Total: ${this.valor.fisico}`
        }else if (valior === 2){
            return `Pedido realizado para o livro ${this.nome} do autor ${this.autor} do tipo ${this.tipo[0]}\n Total: ${this.valor.digital}`
        }else{
            return `Erro! digite uma das opções`
        }
    }
}

console.log(livro.comprar())