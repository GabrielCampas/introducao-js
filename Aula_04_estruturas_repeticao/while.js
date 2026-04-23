const leia = require('readline-sync');

// Usando loop 'while' para calcular notas
console.log("Bem-vindo ao CalcNota");

// Variável 'primeira_nota' recebe o valor da primeira nota
let primeira_nota = leia.questionFloat("Informe a primeira nota: ");

// Enquanto a primeira nota for menor que zero ou maior que dez, nota inválida
while (primeira_nota < 0 || primeira_nota > 10) {
    console.log("Nota invalida.");

    // Retorna à pergunta da primeira nota
    primeira_nota = leia.questionFloat("Informe a primeira nota: ");
}

// Variável 'segunda_nota' receba o valor da segunda nota
let segunda_nota = leia.questionFloat("Informe a segunda nota: ");

// Enquanto a segunda nota for menor que zero ou maior que dez, nota inválida
while (primeira_nota < 0 || primeira_nota > 10) {
    console.log("Nota invalida.");
    
    // Retorna à pergunta da segunda nota
    segunda_nota = leia.questionFloat("Informe a segunda nota: ");
}

// Variável 'media' recebe valor somado da primeira e segunda nota divididos por 2
let media = (primeira_nota + segunda_nota) / 2;

// Mostrando a média
console.log(`A media e: ${media}.`);
