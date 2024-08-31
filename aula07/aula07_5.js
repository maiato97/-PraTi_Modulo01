/* function é uma função que criamos, de acordo com a necessidade e com as proprias regras
diferente de for, while que a função já é definida.*/

function calcularAreaTerreno(largura, comprimento){

    let area = largura * comprimento

    return area
}

let prompt = require('prompt-sync')()

let largura = prompt("Digite a largura do terreno em metros: ")
let comprimento = prompt("Digite o comprimento do terreno em metros: ")

//Chamada da função e passagem de parâmetros

let resultado = calcularAreaTerreno(largura, comprimento)

console.log('O terreno possuí '+ resultado + ' metros quadrados')
