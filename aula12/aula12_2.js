// function jogos(titulo, genero, anoLancamento, empresa, jogar){
//     return{
//         titulo,
//         genero,
//         anoLancamento,
//         empresa,
//         jogar
//     }
// }

// let jogo1 = jogos("Final Fantasy", "RPG", "1997", "Square Soft", () => { return 'Jogando' })

// // console.log(jogo1.jogar())


// for(let key in jogo1){
//     console.log(`${key}: ${jogo1[key]}`)
// }

function filmes(titulo, genero, lancamento, classificacao){
    return{
        titulo,
        genero,
        lancamento,
        classificacao
    }
}

let filme1 = filmes("Avengers: Endgame", "Heróis", 2019, 12)

console.log(filme1)

for(let key in filme1){
    console.log(filme1[key])
}

for(let infos of Object.keys(filme1)){
    console.log(filme1[infos])
}