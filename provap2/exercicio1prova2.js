const leia = require('readline-sync')

// declarando os vetores
let nome = [];
let preco = [];
const total_produtos = 5;

// declarando a funcao
function calcularTotalEstoque(vetorPrecos) {
    let soma = 0;
    for (let i=0; i<total_produtos; i++){
        soma += vetorPrecos[i];
    }
    return soma;
}


// entrada de dados
console.log("Bem-Vindo ao sistema de cadastro de itens.");
for (let i=0; i<total_produtos; i++) {
    nome[i] = leia.question(`Digite o nome do produto ${i+1}: `);
    preco[i] = leia.questionFloat(`Digite o preco do produto ${i+1}: `);
}

// chamando a funcao
let total = calcularTotalEstoque(preco);

// exibindo
console.log("\n--- LISTA DE PRODUTOS ---");
for (let i=0; i<total_produtos; i++) {
    console.log(`Produto: ${nome[i]} - R$ ${preco[i].toFixed(2)}`);
}

console.log(`\nVALOR TOTAL DO ESTOQUE: R$ ${total.toFixed(2)}`);