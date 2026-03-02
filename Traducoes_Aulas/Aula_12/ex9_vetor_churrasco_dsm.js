// Exercício 9 - Churrasco DSM
// Calcula o valor total de um churrasco com base em 5 itens (nome, valor unitário e quantidade).

const leia = require('readline-sync');

// Vetores para armazenar dados dos itens
let item = new Array(5);        // nome do item (caracter / string)
let valorUnit = new Array(5);   // valor unitário (real)
let qnt = new Array(5);         // quantidade (real)
let valorTotal = new Array(5);  // valor total de cada item (real)

// Quantidade de pessoas (não usada no cálculo simples, mas mantida por fidelidade ao algoritmo)
let qntPessoas;

// Total geral do churrasco
let totalChurrasco = 0;

// Leitura da quantidade de pessoas (pode ser usada depois para dividir o valor por pessoa)
console.log("Quantas pessoas irão?");
qntPessoas = leia.questionInt("");

// Leitura dos dados dos 5 itens
for (let i = 0; i < 5; i++) {
    console.log(`\nItem ${i + 1}:`);

    // Nome do item
    item[i] = leia.question("Informe o item: ");

    // Valor unitário do item
    valorUnit[i] = leia.questionFloat("Qual o valor unitário do item? ");

    // Quantidade do item
    qnt[i] = leia.questionFloat("Qual a quantidade do item? ");

    // Calcula o valor total deste item
    valorTotal[i] = valorUnit[i] * qnt[i];

    // Acumula no total do churrasco
    totalChurrasco = totalChurrasco + valorTotal[i];
}

// Exibe o total do churrasco (opcional, pois o VisualG original não mostrava)
console.log("\nResumo do churrasco:");
for (let i = 0; i < 5; i++) {
    console.log(`Item: ${item[i]} | Quantidade: ${qnt[i]} | Valor unitário: R$ ${valorUnit[i].toFixed(2)} | Total: R$ ${valorTotal[i].toFixed(2)}`);
}
console.log(`\nTotal do churrasco: R$ ${totalChurrasco.toFixed(2)}`);

// Se quiser, também pode mostrar o valor por pessoa:
if (qntPessoas > 0) {
    console.log(`Valor aproximado por pessoa: R$ ${(totalChurrasco / qntPessoas).toFixed(2)}`);
}