const leia = require('readline-sync');

let zoo = [];
let maiorPop, maiorIdade;
let animalPop = 0, animalIdade = 0;

console.log("Digite os dados de cada animal (quantidade e idade média):");

for (let i = 0; i < 5; i++) {
    zoo[i] = [];
    console.log(`Animal ${i + 1}:`);
    zoo[i][0] = leia.questionFloat("Quantidade: ");
    zoo[i][1] = leia.questionFloat("Idade média: ");
}

maiorPop = zoo[0][0];
maiorIdade = zoo[0][1];

for (let i = 1; i < 5; i++) {
    if (zoo[i][0] > maiorPop) {
        maiorPop = zoo[i][0];
        animalPop = i;
    }
    if (zoo[i][1] > maiorIdade) {
        maiorIdade = zoo[i][1];
        animalIdade = i;
    }
}

console.log("Animal com maior população: ", animalPop + 1);
console.log("Animal com maior idade média: ", animalIdade + 1);