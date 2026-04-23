const leia = require('readline-sync');

let notas = [];
let maior = 0;
let campeao = 0;

console.log("Digite as notas dos 4 magos (3 feitiços cada):");

for (let i = 0; i < 4; i++) {
    notas[i] = [];
    for (let j = 0; j < 3; j++) {
        notas[i][j] = leia.questionFloat(`Mago ${i + 1}, Feitiço ${j + 1}: `);
    }
}

for (let i = 0; i < 4; i++) {
    let soma = 0;
    for (let j = 0; j < 3; j++) {
        soma += notas[i][j];
    }
    console.log(`Pontuação do mago ${i + 1}: ${soma}`);
    if (soma > maior) {
        maior = soma;
        campeao = i;
    }
}

console.log("O campeão foi o mago", campeao + 1);