// PROCEDIMENTO_CALCULADORA
// Exemplo de calculadora usando procedimentos (sem retorno).
// Apenas soma e subtração foram implementadas, como no algoritmo original.

const leia = require('readline-sync');

// Variáveis globais
let primeiro_numero, segundo_numero, res;
let opcao;

// Procedimentos
function somar() {
    res = primeiro_numero + segundo_numero;
}

function subtrair() {
    res = primeiro_numero - segundo_numero;
}

function multiplicar() {
    res = primeiro_numero * segundo_numero;
}

function dividir() {
    res = primeiro_numero / segundo_numero;
}

// Programa principal
console.log("Bem-vindo à calculadora");
console.log("O que você quer fazer?");
console.log("1 - somar");
console.log("2 - subtrair");
opcao = leia.questionInt("> ");

console.log("Informe o primeiro número:");
primeiro_numero = leia.questionFloat("> ");
console.log("Informe o segundo número:");
segundo_numero = leia.questionFloat("> ");

if (opcao === 1) {
    somar();
} else if (opcao === 2) {
    subtrair();
} else {
    console.log("Opção inválida. Resultado permanecerá indefinido.");
}

console.log("O resultado é:", res);
