// o while equivale ao "ENQUANTO" do VisualG

const leia = require('readline-sync')
console.log("Bem vindo a validacao de notas")

primeira_nota = leia.questionFloat("Digite a primeira nota: ");

while (primeira_nota<0 || primeira_nota>10) {
    console.log("Nota invalida.")
    primeira_nota = leia.questionFloat("Digite a primeira nota: ");
}

let segunda_nota = leia.questionFloat("Digite a segunda nota: ");

while (segunda_nota<0 || segunda_nota>10) {
    console.log("Nota invalida.")
    segunda_nota = leia.questionFloat("Digite a segunda nota: ");
}

let media = (primeira_nota + segunda_nota) / 2
console.log("Sua media e: " + media);