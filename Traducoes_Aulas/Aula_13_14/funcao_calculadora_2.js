// FUNCAO_CALCULADORA - Versão 2
// Usa variáveis globais e uma função sem parâmetros que retorna a soma.

const leia = require('readline-sync');

// Variáveis globais
let primeiro_num, segundo_num, res;

// Função que usa as variáveis globais
function somar() {
    res = primeiro_num + segundo_num;
    return res;
}

// Programa principal
console.log("Informe o primeiro número:");
primeiro_num = leia.questionFloat("> ");

console.log("Informe o segundo número:");
segundo_num = leia.questionFloat("> ");

// Aqui, res ainda não foi calculado (mantemos o comportamento
// do pseudocódigo, que primeiro mostra 'res' e depois chama somar).
console.log("O resultado é:", res);

// Agora chamamos a função e mostramos o valor retornado.
console.log("O resultado é:", somar());
