const leia = require('readline-sync');

let nomes = [];
let precos = [];
const total_produtos = 5;

function calcularTotalEstoque(vetorPrecos) {
    let soma = 0;
    for (let i = 0; i < total_produtos; i++) {
        soma += vetorPrecos[i];
    }
    return soma;
}

// Entrada de dados
console.log("--- CADASTRO DE PRODUTOS ---");
for (let i = 0; i < total_produtos; i++) {
    nomes[i] = leia.question(`Digite o nome do produto ${i+1}: `);
    precos[i] = leia.questionFloat(`Digite o preco do produto ${i+1}: `);
}

// Chamada da função e Exibição
let total = calcularTotalEstoque(precos);

console.log("\n--- LISTA DE PRODUTOS ---");
for(let i = 0; i < total_produtos; i++){
    console.log(`Produto: ${nomes[i]} - R$ ${precos[i].toFixed(2)}`);
}

console.log(`\nVALOR TOTAL DO ESTOQUE: R$ ${total.toFixed(2)}`);