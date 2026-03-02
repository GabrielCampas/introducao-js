const leia = require('readline-sync');

let letras = [];
let letraBuscada;
let contador = 0;

console.log("Digite as letras da matriz 3x3:");

for (let i = 0; i < 3; i++) {
    letras[i] = [];
    for (let j = 0; j < 3; j++) {
        letras[i][j] = leia.question(`Posição [${i + 1}, ${j + 1}]: `);
    }
}

console.log("Digite a letra a ser buscada: ");
letraBuscada = leia.question("");

for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (letras[i][j] === letraBuscada) {
            contador++;
        }
    }
}

console.log(`A letra ${letraBuscada} aparece ${contador} vezes.`);