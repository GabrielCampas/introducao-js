// Exercício 3 - Contar números pares em um vetor
// Lê 8 números inteiros e conta quantos deles são pares.

const leia = require('readline-sync');

// Vetor com 8 posições para armazenar os números
let numeros = new Array(8);

// Contador de números pares
let qtd_pares = 0;

// Variável de controle
let i;

// Leitura dos 8 números
for (i = 0; i < 8; i++) {
    let valor = leia.questionInt(`Digite o ${i + 1}º número: `);
    numeros[i] = valor;

    // Verifica se o número é par usando o operador de resto (%)
    if (numeros[i] % 2 === 0) {
        qtd_pares = qtd_pares + 1;
    }
}

// Exibe a quantidade de números pares encontrados
console.log("Quantidade de números pares:", qtd_pares);