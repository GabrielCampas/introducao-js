// PROCEDIMENTOS_PARAMETRO
// Demonstra passagem de valores por parâmetro em um procedimento.

const leia = require('readline-sync');

// Procedimento que recebe dois números, soma e exibe o resultado
function somar(x, y) {
    // 'res' é variável local
    const res = x + y;
    console.log("O resultado é:", res);
}

// Programa principal
let tmp_x, tmp_y;

console.log("Informe o primeiro número");
tmp_x = leia.questionFloat("> ");

console.log("Informe o segundo número");
tmp_y = leia.questionFloat("> ");

// Chamada do procedimento somar passando variáveis como argumentos
somar(tmp_x, tmp_y);

// Também podemos passar valores literais diretamente
somar(9.5, 7.48);
