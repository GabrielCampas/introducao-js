const leia = require('readline-sync');

let temp = [];
let mediaDia, maiorMedia = 0;
let diaMaisQuente = 0;

console.log("Digite as temperaturas (manhã, tarde, noite) para 7 dias:");

for (let i = 0; i < 7; i++) {
    temp[i] = [];
    for (let j = 0; j < 3; j++) {
        temp[i][j] = leia.questionFloat(`Dia ${i + 1}, Período ${j + 1}: `);
    }
}

for (let i = 0; i < 7; i++) {
    mediaDia = (temp[i][0] + temp[i][1] + temp[i][2]) / 3;
    if (mediaDia > maiorMedia) {
        maiorMedia = mediaDia;
        diaMaisQuente = i + 1;
    }
}

console.log(`O dia mais quente foi o dia ${diaMaisQuente} com média de ${maiorMedia.toFixed(1)} °C.`);