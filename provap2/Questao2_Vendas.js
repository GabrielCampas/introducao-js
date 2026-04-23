const leia = require('readline-sync');

// Matriz 3x4 (inicializada vazia ou com zeros)
let vendas = [
    [0, 0, 0, 0], // Norte
    [0, 0, 0, 0], // Sul
    [0, 0, 0, 0]  // Leste
];

let nomesRegioes = ["Norte", "Sul", "Leste"];

function gerarRelatorio(matrizVendas) {
    console.log("\n--- RELATÓRIO DE DESEMPENHO ---");
    for (let i = 0; i < 3; i++) {
        let soma = 0;
        for (let j = 0; j < 4; j++) {
            soma += matrizVendas[i][j];
        }
        console.log(`Região ${nomesRegioes[i]}: Total R$ ${soma.toFixed(2)}`);
    }
}

// Preenchimento da Matriz
for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 4; j++) {
        vendas[i][j] = leia.questionFloat(`Digite venda da Regiao ${nomesRegioes[i]} (Trimestre ${j+1}): `);
    }
}

// Chamada do Procedimento
gerarRelatorio(vendas);