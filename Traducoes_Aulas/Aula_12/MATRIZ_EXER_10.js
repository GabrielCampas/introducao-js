const leia = require('readline-sync');

let cofre = [];
let maior = 0;
let total = 0;
let membroCampeao = 0;

console.log("Digite os valores economizados (3 membros, 4 semanas):");

for (let i = 0; i < 3; i++) {
    cofre[i] = [];
    for (let j = 0; j < 4; j++) {
        cofre[i][j] = leia.questionFloat(`Membro ${i + 1}, Semana ${j + 1}: `);
    }
}

for (let i = 0; i < 3; i++) {
    let somaMembro = 0;
    for (let j = 0; j < 4; j++) {
        somaMembro += cofre[i][j];
    }
    total += somaMembro;
    console.log(`Membro ${i + 1} economizou R$ ${somaMembro.toFixed(2)}`);
    if (somaMembro > maior) {
        maior = somaMembro;
        membroCampeao = i;
    }
}

console.log(`O total economizado pela família foi R$ ${total.toFixed(2)}`);
console.log("O membro que mais economizou foi o", membroCampeao + 1);