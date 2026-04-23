const leia = require('readline-sync');

// Utilizando operadores ternários pra calcular uma média
console.log("Bem-vindo ao cálculo da média");
console.log("Informe as notas a seguir:");

let primeira_nota = leia.questionFloat("Digite a nota 1:");
let segunda_nota = leia.questionFloat("Digite a nota 2:");

// Variável 'media' recebe a ('primeira_nota' + 'segunda_nota') dividido por 2
let media = (primeira_nota + segunda_nota) / 2;

console.log("Sua média é: " + media);

// Se a média for maior que 6, aprovado
if (media > 6) {
    console.log("Você está aprovado.");
    // Senão, reprovado.
} else
    console.log("Você foi reprovado.");

console.log("Fim do script");