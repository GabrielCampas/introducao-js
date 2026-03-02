// PROCEDIMENTO_IMC
// Procedimento que calcula o IMC usando variáveis locais
// e armazena o resultado em uma variável global.

const leia = require('readline-sync');

// Variável global
let imc;

// Procedimento para calcular IMC
function calcular_imc() {
    // Variáveis locais
    console.log("Qual sua altura?");
    const altura = leia.questionFloat("> ");

    console.log("Qual seu peso?");
    const peso = leia.questionFloat("> ");

    imc = peso / (altura * altura);
}

// Programa principal
calcular_imc();
console.log("Seu IMC é:", imc.toFixed(2));

// A variável 'altura' não existe aqui (era local ao procedimento)
// e não pode ser acessada fora, tal como no algoritmo original comentava.
