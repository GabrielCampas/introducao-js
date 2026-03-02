let n1 = 0;
let n2 = 0;

function ler_notas() {

    const leia = require('readline-sync');

    n1 = leia.questionFloat("Digite a n1: ");
    n2 = leia.questionFloat("Digite a n2: ");
}

function media(primeira_nota, segunda_nota) {
    let soma_notas = primeira_nota + segunda_nota;
    let media = soma_notas / 2;
    return media;
}

ler_notas();

console.log("A media do aluno é: " + media(n1, n2));

