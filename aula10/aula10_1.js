const professor = {
    nome: "Tony Stark",
    materia: "Matemática",
    notas: {
        aluno1: 3.5,
        aluno2: 4.0,
        aluno3: 2.8
    }
}

/*
    For In para iterar sobre as propriedades dentro das notas,
    calcule a média da turma. Se a média for maior que 3.0 acima da média.
*/
let somaNotas = 0
let totalAlunos = 0
for (let turma in professor.notas) {
    somaNotas += professor.notas[turma]
    totalAlunos++
}

let media = somaNotas / totalAlunos

if (media >= 3){
    console.log(`Média: ${media.toFixed(2)}, a turma está acima da média.`)
} else {
    console.log(`Média: ${media.toFixed(2)}, a turma está abaixo da média.`)
}