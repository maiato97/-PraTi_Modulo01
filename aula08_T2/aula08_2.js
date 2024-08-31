// verifique se o ano é bisexto

const prompt = require('prompt-sync')()

const ano = parseInt(prompt("Digite um ano: "))

if ((ano % 4 === 0 && ano % 100 !== 0) || ano % 400 === 0){
    console.log(`O ano ${ano} é bissexto`)
} else {
    console.log(`${ano} não é bissexto.`)
}