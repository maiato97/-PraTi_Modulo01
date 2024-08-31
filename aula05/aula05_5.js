prompt = require('prompt-sync')();

let dia = parseInt(prompt("Insira um numero do dia da semana: "));

let nomeDia;

switch(dia) {
    case 1: 
        nomeDia = "Domingo";
        break;
    case 2:
        nomeDia = "Segunda-Feira";
        break;
    case 3:
        nomeDia = "Terça-Feira";
        break;
    case 4:
        nomeDia = "Quarta-Feira";
        break;
    case 5:
        nomeDia = "Quinta-Feira";
        break;
    case 6:
        nomeDia = "Sexta-Feira";
        break;
    case 7:
        nomeDia = "Sábado";
        break;
    default:
        console.log("Digite um numero de 1 a 7");
        break;
}

console.log("O dia é: ", nomeDia);