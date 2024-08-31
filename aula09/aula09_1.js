
const pessoa = { // objetos no js são definidos por chave e valor dentro de {}
    nome: "Lucas",
    idade: 18,
    email: "lucas@gmail.com",
    profissao: "Músico",
    empregada: true
}

pessoa.nome = "Jurema"

console.log(pessoa)

delete pessoa.empregada

console.log(pessoa)

pessoa.falar = function() {
    return `Meu nome é ${this.nome}, tenho ${this.idade} de idade e sou ${this.profissao}`
} 

console.log(pessoa)

