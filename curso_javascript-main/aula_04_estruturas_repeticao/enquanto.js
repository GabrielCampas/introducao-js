/**
 * Aula baseada na aula do Visualg abaixo:
 * https://github.com/tiagotas/VISUALG_Algoritmos_Exemplo/blob/main/AULA%2007%20-%20ENQUANTO_VALIDADAO_NOTAS.ALG
 */

const leia = require('readline-sync');

console.log("Bem-vindo ao CalcNota");

let primeira_nota = leia.questionFloat("Informe a primeira nota: "); //9

while (primeira_nota < 0 || primeira_nota > 10) {
    console.log("Nota inválida.");
    primeira_nota = leia.questionFloat("Informe a primeira nota: ");
}

let segunda_nota = leia.questionFloat("Informe a segunda nota: ");

while (segunda_nota < 0 || segunda_nota > 10) {
    console.log("Nota inválida.");
    segunda_nota = leia.questionFloat("Informe a segunda nota: ");
}

let media = (primeira_nota + segunda_nota) / 2

console.log("A média é:" + media);