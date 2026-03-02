const leia = require('readline-sync');

console.log("Bem-vindo ao CalcNota");

let primeira_nota = leia.questionFloat("Informe a primeira nota: ");

while (primeira_nota < 0 || primeira_nota > 10) {
    console.log("Nota inválida.");
    primeira_nota = leia.questionFloat("Informe a primeira nota: ");
}

let segunda_nota = leia.questionFloat("Informe a segunda nota: ");

while (primeira_nota < 0 || primeira_nota > 10) {
    console.log("Nota inválida.");
    segunda_nota = leia.questionFloat("Informe a segunda nota: ");
}

let media = (primeira_nota + segunda_nota) / 2;

console.log("A média é :" + media);
