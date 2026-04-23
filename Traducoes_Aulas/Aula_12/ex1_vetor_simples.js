// Exercício 1 - Vetor simples
// Lê 5 números inteiros e depois exibe todos na ordem em que foram digitados.

const leia = require('readline-sync');

// Declara um vetor de 5 posições para armazenar números inteiros
let numeros = new Array(5);

// Variável de controle do laço
let i;

// Leitura dos 5 números
for (i = 0; i < 5; i++) {
    // i + 1 apenas para exibir 1º, 2º, etc. para o usuário
    let valor = leia.questionInt(`Digite o ${i + 1}º número: `);
    numeros[i] = valor;
}

// Exibição dos números digitados
console.log("Números digitados:");
for (i = 0; i < 5; i++) {
    console.log(numeros[i]);
}