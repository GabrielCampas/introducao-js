const leia = require('readline-sync');

// Utilizando 'if' para calcular médias
console.log("Bem-vindo ao cálculo da média");
console.log("Informe as notas a seguir:");

// Variáveis 'primeira_nota' e 'segunda_nota' recebem, respectivamente, nota 1 e 2.
let primeira_nota = leia.questionFloat("Digite a nota 1:");
let segunda_nota = leia.questionFloat("Digite a nota 2:");

// Variável 'media' recebe primeira nota + segunda nota, soma e as divide por 2
let media = (primeira_nota + segunda_nota) / 2;

console.log("Sua média é: " + media);

// Se media maior que 6, aprovado
if (media > 6) {
    console.log("Você está aprovado!");
    // Senão, reprovado.
} else
    console.log("Você foi reprovado");

// Fim
console.log("Fim do script");