// Exercício 2 - Soma de vetor
// Lê 10 números inteiros, acumula a soma e exibe o resultado final.

const leia = require('readline-sync');

// Vetor para armazenar 10 números inteiros
let numeros = new Array(10);

// Acumulador da soma
let soma = 0;

// Variável de controle
let i;

// Leitura dos 10 números e soma
for (i = 0; i < 10; i++) {
    let valor = leia.questionInt("Digite um número: ");
    numeros[i] = valor;
    // Acumula o valor lido na variável soma
    soma = soma + numeros[i];
}

// Exibe a soma total
console.log("Soma dos números:", soma);