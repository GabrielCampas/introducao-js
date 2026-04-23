const leia = require('readline-sync');

let sinais = [];
let total = 0;

console.log("Digite os sinais (0 = silêncio, 1 = sinal):");

for (let i = 0; i < 5; i++) {
    sinais[i] = [];
    let contLinha = 0;

    for (let j = 0; j < 5; j++) {
        sinais[i][j] = leia.questionInt(`Linha ${i + 1}, Coluna ${j + 1}]: `);
        total += sinais[i][j];
        contLinha += sinais[i][j];
    }

    if (contLinha > 3) {
        console.log("Atividade intensa detectada na linha", i + 1);
    }
}

console.log("Total de sinais detectados:", total);