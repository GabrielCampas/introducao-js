const leia = require('readline-sync');

// Usando 'se aninhado' para cálculo de médias.
console.log("Bem-vindo ao cálculo da média");
console.log("Informe as notas a seguir:");

// Variável 'primeira_nota' e 'segunda_nota' recebem, respectivamente, nota 1 e 2
let primeira_nota = leia.questionFloat("Digite a nota 1:");
let segunda_nota = leia.questionFloat("Digite a nota 2:");

// Variável 'media' recebe (primeira nota + segunda nota), dividido por 2
let media = (primeira_nota + segunda_nota) / 2;

// Mostrando a media
console.log("Sua média é: " + media);

// Se média maior ou igual a 8.5, menção A
if (media >= 8.5)
    console.log("Sua menção é A");
// Senão

else {

    // Se média for maior ou igual 7.5 e menor ou igual 8.4, menção B
    if (media >= 7.5 && media <= 8.4) {
        console.log("Sua menção é B");
    } 

    // Se média for maior ou igual 6.5 e menor ou igual 7.4, menção C
    if (media >= 6.5 && media <= 7.4) {
        console.log("Sua menção é C");
    }

    // Se média for maior ou igual a 5 e menor ou igual 6.4, menção D
    if (media >= 5 && media <= 6.4) {
        console.log("Sua menção é D");
    }

    // Se média for menor que 5, menção D
    if (media < 5)
        console.log("Sua menção é E");

} // <- Fechamento do else da linha 15

// Fim
console.log("Fim do script");