/**
 * revisao baseada na aula do VisualG
 */

const leia = require('readline-sync');

console.log("Bem vindo ao cálculo da média");
console.log("Informe as notas a seguir.");

let primeira_nota = leia.questionFloat("Digite a nota 1: ");
let segunda_nota = leia.questionFloat("Digite a nota 2: ");

let media = (primeira_nota + segunda_nota) / 2;

console.log("Sua média é: " + media);

if(media >= 8.5) 
    console.log("Sua menção é A");
//esse else precisa de chaves pois terão outros if's dentro dele
//as chaves também podem fazer a mesma função do "FIMSE" do VisualG, mas não são necessárias
else {
    if(media >= 7.5 && media <= 8.4) {
        console.log("Sua mençao é B");
    }
    if (media >= 6.5 && media <= 7.4) {
        console.log("Sua mençao é C");
    }
    if (media >= 5 && media <= 6.4) {
        console.log("Sua mençao é D");
    }
    if (media < 5)
        console.log("Sua mençao é E");
}
