const leia = require('readline-sync');

// Introdução à matrizes com javascript
console.log("Estudando MATRIZES com JavaScript");

// declarando 'nomes' como uma matriz
nomes = [[], [], []];

// adicionando conteúdo a cada linha e coluna da matriz
//    L  C
nomes[0][0] = "João";
nomes[0][1] = "Maria";
nomes[0][2] = "José";
nomes[0][3] = "Helena";
nomes[1][0] = "Zezinho";
nomes[1][1] = "Nina";
nomes[1][2] = "Gabriel";
nomes[1][3] = "Marcos";
nomes[2][0] = "Vera";
nomes[2][1] = "Caio";
nomes[2][2] = "Leonardo";
nomes[2][3] = "João";

// Mostra a tabela com nomes e fim
console.table(nomes);

