// funções avançadas: matemáticas

let x = Math.random(); //gera número aleatório
console.log("Número aleatório: ", x);

// funções avançadas: Datas

let data = new Date().toLocaleDateString("pt-BR"); // variavel que guarda a data usando função com parametro de data brasileira.

console.log(data);

let data1 = new Date();
let data2 = new Date();

let milisegundosEntreDatas = Math.abs(data1.getTime() - data2.getTime());

