const leia = require('readline-sync');

// Introdução à matrizes em JavaScript
console.log("Estudando MATRIZES com JavaScript");

// Nome é um vetor
nomes = [];

// no começo 'i' vale zero
// i para até chegar a 3
// i++ incrementa (até a 3)
for (let i = 0; i < 3; i++) {

    // 'i' representa as linhas (3)
    nomes[i] = [];
    // 'j' representa as colunas (4)
    for (let j = 0; j < 4; j++) {

        // 'msg' vai pegar o conteúdo e armazenar na sua linha e coluna correspondente do laço
        msg = `Digite o nome da linha ${i} e coluna ${j}: `;

        // nomes vai pegar o conteúdo que foi colocado em 'msg' e colocar na posição da tabela
        nomes[i][j] = leia.question(msg);
        console.table(nomes);
    }

}
