const biblioteca = [
{titulo: "12 Regras para Vida", autor: "Jordan Peterson", ano: 1925},
{titulo: "O Hobbit", autor: "J.R.R. Tolkien", ano: 1937},
{titulo: "A Senhora do Jogo", autor: "Sidney Sheldon", ano: 2009},
{titulo: "Zé Carioca", autor: "Disney", ano: 1940},
{titulo: "Nação Dopamina", autor: "Anna Lembke", ano: 2021}
]
/* 
    For of para iterar sobre o array biblioteca para cada livro,
    verifique se foi publicado antes de 2000
    Imprimir o titulo e o ano dos livros que atendem essa condição.

*/

for (livro of biblioteca) {
    if(livro.ano < 2000) {
        console.log(`Título: ${livro.titulo} \nAutor: ${livro.autor} \nAno: ${livro.ano}\n`)
    }
}