const filmes = [
    {titulo: "Tropa de Elite", genero: "Ação"},
    {titulo: "Capitão Fantástico", genero: "Drama"},
    {titulo: "O Poderoso Chefão", genero: "Crime"},
    {titulo: "Clube da Luta", genero: "Drama"},
    {titulo: "Oppenheimer", genero: "Biografia"},
    {titulo: "High School Musical", genero: "Musical"},
    {titulo: "Barbie", genero: "Comédia"},
]

/*
    Com forEach para iterar sobre o array, crie um objeto para armazenar a contagem de filmes por gênero
    para cada filme no array, verique se o gênero já existe no objeto contagem.
    Se existir, incremente a contagem, se não, adicione o gênero ao objeto com contagem inicial de 1
    Após loop, imprima cada gênero e o número de filmes correspondente.
*/

let contagem = {}

filmes.forEach(filme => {
    if(contagem[filme.genero]){ // testa se é true
        contagem[filme.genero]++ 
    } else {
        contagem[filme.genero] = 1
    }
})

for (let genero in contagem) {
    console.log(`${genero}: ${contagem[genero]}`)
}