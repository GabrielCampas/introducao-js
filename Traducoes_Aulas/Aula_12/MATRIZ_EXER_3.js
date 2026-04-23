const leia = require('readline-sync');

let cartela = [];
let achou = false;
let numero;

console.log("Digite os números da cartela de bingo:");

for (let i = 0; i < 5; i++) {
    cartela[i] = [];
    for (let j = 0; j < 5; j++) {
        cartela[i][j] = leia.questionInt(`Posição [${i + 1}, ${j + 1}]: `);
    }
}

console.log("Digite o número sorteado: ");
numero = leia.questionInt("");

achou = false;

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        if (cartela[i][j] === numero) {
            console.log(`Número encontrado na posição [${i + 1}, ${j + 1}]`);
            achou = true;
        }
    }
}

if (!achou) {
    console.log("Número não encontrado na cartela.");
}