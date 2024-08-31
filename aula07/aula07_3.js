let listaProdutos = Array('Computador', 'Caneta', 'Chuteira')

let aux = listaProdutos.indexOf('Chuteira')

if(aux === -1){
    console.log('O elemento não existe no Array')
} else {
    console.log('Elemento existe e está na posição ' + aux)
}