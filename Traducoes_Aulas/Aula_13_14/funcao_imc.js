// FUNCAO_IMC
// Função que lê peso e altura, calcula e retorna o IMC.

const leia = require('readline-sync');

function calcularImc() {
    console.log("Qual sua altura?");
    const altura = leia.questionFloat("> ");
    console.log("Qual seu peso?");
    const peso = leia.questionFloat("> ");
    // Fórmula: IMC = peso / (altura^2)
    return peso / (altura * altura);
}

// Programa principal
const imc = calcularImc();
console.log("Seu IMC é:", imc);
