/*
    Objetivo: Verificar e listar livros publicados antes de 2000.
    Use um loop for...of para iterar sobre o array biblioteca.
    Imprima o título e o ano dos livros que atendem a essa condição.
*/

const library = [
    { tittle: "O Hobbit", author: "J.R.R. Tolkien", year: 1925 },
    { tittle: "Harry Potter: Prisioneiro de Azkaban", author: "J.K. Rolling", year: 1999 },
    { tittle: "Nárnia", author: "C. S. Lewis", year: 2010 }
]

for(let book of library){
    if(book.year < 2000) {
        console.log(`O livro ${book.title}, escrito por ${book.author}, foi publicado em ${book.year}.`)
    }
}