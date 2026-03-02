const leia = require('readline-sync');

// Matriz 3x3 do mapa
let mapa = [];
let i, j;

console.log("Digite o mapa do tesouro (1 para tesouro, 0 para vazio):");

// Leitura da matriz
for (i = 0; i < 3; i++) {
    mapa[i] = [];
    for (j = 0; j < 3; j++) {
        mapa[i][j] = leia.questionInt(`Posição [${i + 1}, ${j + 1}]: `);
    }
}

// Verificação das posições com tesouro
for (i = 0; i < 3; i++) {
    for (j = 0; j < 3; j++) {
        if (mapa[i][j] === 1) {
            console.log(`Tesouro encontrado na posição [${i + 1}, ${j + 1}]`);
        }
    }
}