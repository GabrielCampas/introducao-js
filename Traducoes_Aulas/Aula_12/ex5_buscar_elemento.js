// Exercício 5 - Buscar elemento em vetor
// Lê 10 números inteiros, depois lê um valor a procurar e informa se foi encontrado e em qual posição.

const leia = require('readline-sync');

// Vetor com 10 posições
let numeros = new Array(10);

// Variáveis
let i;
let valor;
let encontrado = false; // equivalente ao 'logico' no VisualG

// Leitura dos 10 números
for (i = 0; i < 10; i++) {
    let num = leia.questionInt(`Digite o ${i + 1}º número: `);
    numeros[i] = num;
}

// Lê o valor a procurar
valor = leia.questionInt("Digite o valor a procurar: ");

// Procura o valor dentro do vetor
for (i = 0; i < 10; i++) {
    if (numeros[i] === valor) {
        console.log(`Valor encontrado na posição ${i + 1}`);
        encontrado = true;
        // Não damos break para imitar o VisualG (que poderia listar todas as posições)
    }
}

// Se não encontrou em nenhuma posição
if (!encontrado) {
    console.log("Valor não encontrado.");
}