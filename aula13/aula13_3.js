/*
    Objetivo: Contar a quantidade de filmes por gênero.
    Use o método forEach para iterar sobre o array filmes.
    Para cada filme, verifique se o gênero já existe no objeto de contagem. 
    Se existir, incremente a contagem; se não, adicione o gênero ao objeto com a contagem inicial de 1.
*/

const filmes = [
    {titulo: "Avengers Endgame", anoLancamento: 2019, genero: "Heróis"},
    {titulo: "Deadpool and Wolverine", anoLancamento: 2024, genero: "Heróis"},
    {titulo: "Interestelar", anoLancamento: 2014, genero: "Ficcção Ciêntifica"}
]

let contarGenero = {}

filmes.forEach( filme => {
    if(contarGenero[filme.genero]){
        contarGenero[filme.genero]++
    } else {
        contarGenero[filme.genero] = 1
    }
})

for(let genero in contarGenero){
    console.log(`Existem ${contarGenero[genero]} filmes do gênero ${genero}`)
}