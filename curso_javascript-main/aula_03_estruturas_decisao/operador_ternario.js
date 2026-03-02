/**
 * Aula baseada na aula do Visualg abaixo:
 * https://github.com/tiagotas/VISUALG_Algoritmos_Exemplo/blob/main/AULA%2002%20-%20SE_APROVACAO.ALG
 */

const leia = require('readline-sync');

console.log("Bem-vindo ao cálculo da média");
console.log("Informe as notas a seguir.");

let primeira_nota = leia.questionFloat("Digite a n1:");
let segunda_nota = leia.questionFloat("Digite a n2:");

let media = (primeira_nota + segunda_nota) / 2;

console.log("Sua média é: " + media);

/*
if(media > 6)
    console.log("Você está aprovado!");
else
    console.log("Você foi reprovado");
*/
console.log( (media > 6) ? "Você está aprovado" : "Vc foi reprovado" );


console.log("Fim do script");