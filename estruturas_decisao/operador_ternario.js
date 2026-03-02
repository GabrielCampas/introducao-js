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

/*
if(media > 6) 
    console.log("Voce esta aprovado!");
else
    console.log("Voce foi reprovado.");
*/

// o operador ternario funciona igual um if - else, mas em uma linha só
// o que está no primeiro parenteses é uma condicional, se ela for verdadeira a primeira condiçao sera acionada, no caso "Voce esta aprovado"
// se a primeira condiçao for falsa, a segunda será acionada, no caso, "Voce foi reprovado".
console.log( (media > 6) ? "Voce esta aprovado" : "Voce foi reprovado" )
console.log("Fim do script.");
