/**
 * Aula baseada na aula do Visualg abaixo:
 * https://github.com/tiagotas/VISUALG_Algoritmos_Exemplo/blob/main/AULA%2003%20-%20SE_ANINHADO_E_MAIS.ALG
 */

const leia = require('readline-sync');

console.log("Bem-vindo ao cálculo da média");
console.log("Informe as notas a seguir.");

let primeira_nota = leia.questionFloat("Digite a n1: ");
let segunda_nota = leia.questionFloat("Digite a n2: ");

let media = (primeira_nota + segunda_nota) / 2;

console.log("Sua média é: " + media);

if (media >= 8.5)
    console.log("Sua menção é A");
else {

    if (media >= 7.5 && media <= 8.4) {
        console.log("Sua menção é B");
    }

    if (media >= 6.5 && media <= 7.4) {
        console.log("Sua menção é C")
    }

    if (media >= 5 && media <= 6.4) {
        console.log("Sua menção é D")
    }

    if (media < 5)
        console.log("Sua menção é E")

} // Fechamento do else da linha 20.


console.log("Fim do script");