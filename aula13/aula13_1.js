/*
    Objetivo: Calcular a média das notas dos alunos de um professor e verificar se está acima da média
    de aprovação. Use um loop for...in para iterar sobre as propriedades dentro de professor.grades.
    Imprima se o professor está acima da média de aprovação (considerando 3.0 como média).
*/

let professor = {
    name: "Jaques",
    materia: "JavaScript",
    notas: [10, 5, 8],
    mediaNotas: function(){
        let soma = 0
        let media = 0
        for(let i = 0; i < this.notas.length; i++){
            soma += this.notas[i]
        }
        media = soma/this.notas.length
        console.log(`A soma das notas é ${soma} e a média é ${media}`)
        if(media >= 7){
            return `O professor ${professor.name} está acima da média.`
        }else {
            return `O professor ${professor.name} está abaixo da média.`
        }
    }
}

for(let key in professor.notas){
    console.log(`A nota na posição ${key} é`,professor.notas[key])
}
console.log(professor.mediaNotas())