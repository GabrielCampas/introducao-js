// Exercício 4 - Inverter vetor
// Lê 6 números inteiros e depois exibe na ordem inversa.

const leia = require('readline-sync');

// Vetor com 6 posições
let numeros = new Array(6);

// Variável de controle
let i;

// Leitura dos 6 números
for (i = 0; i < 6; i++) {
    let valor = leia.questionInt(`Digite o ${i + 1}º número: `);
    numeros[i] = valor;
}

// Exibição dos números na ordem inversa
console.log("Números na ordem inversa:");
for (i = 5; i >= 0; i--) {
    console.log(numeros[i]);
}