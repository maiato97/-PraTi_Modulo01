const pessoa = { // objetos no js são definidos por chave e valor dentro de {}
    nome: "Lucas",
    idade: 18,
    email: "lucas@gmail.com",
    profissao: "Músico",
    empregada: true
}

for (let chave in pessoa) { // for on mais usado em objetos
    console.log(chave + ": " + pessoa[chave])
}