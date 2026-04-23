const leia = require('readline-sync');

let campo = [];
let x, y;

console.log("Preencha o campo (0 = seguro, 9 = mina):");

for (let i = 0; i < 4; i++) {
    campo[i] = [];
    for (let j = 0; j < 4; j++) {
        campo[i][j] = leia.questionInt(`Posição [${i + 1}, ${j + 1}]: `);
    }
}

console.log("Digite a linha e coluna da jogada (1 a 4): ");
x = leia.questionInt("Linha: ");
y = leia.questionInt("Coluna: ");

if (campo[x - 1][y - 1] === 9) {
    console.log("Você pisou em uma MINA! Game over!");
} else {
    console.log("Você está seguro.");
}