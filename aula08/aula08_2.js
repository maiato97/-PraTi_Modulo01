// encontrar o maior número em um array

let elementos = [1, 2, 3, 4];

function numeroMaiorElementos(vetor) {
  return Math.max(...vetor);
}

console.log(
  "O número maior usando Math.max é: ",
  numeroMaiorElementos(elementos)
);

function maiorNumero(vetor) {
  let maior = vetor[0]; // variavel guarda o numero maior
  for (let i = 1; i < vetor.length; i++) {
    //
    if (vetor[i] > maior) {
      maior = vetor[i];
    }
  }
  return maior;
}

console.log("O número maior com For e If é: ", maiorNumero([1, 10, 100, 70]));