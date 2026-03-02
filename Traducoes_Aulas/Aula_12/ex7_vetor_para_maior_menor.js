// Exercício 7 - Maior e menor valor em vetor
// Lê 10 números inteiros e determina o maior e o menor entre eles.

const leia = require('readline-sync');

// Vetor com 10 posições
let numeros = new Array(10);

// Variáveis para maior, menor e controle
let max = 0;
let min = 0;
let i;

// Leitura dos números e atualização de min e max
for (i = 0; i < 10; i++) {
    let valor = leia.questionInt("Informe um número: ");
    numeros[i] = valor;

    // Para o primeiro número lido, inicializamos min e max
    if (i === 0) {
        min = numeros[i];
        max = numeros[i];
    }

    // Atualiza o menor valor, se necessário
    if (numeros[i] < min) {
        min = numeros[i];
    }

    // Atualiza o maior valor, se necessário
    if (numeros[i] > max) {
        max = numeros[i];
    }
}

// Exibição dos resultados
console.log("Maior é", max);
console.log("Menor é", min);