// Exercício 8 - Médias P1 e P2
// Lê P1 e P2 de 5 alunos, calcula a média de cada um e a média da sala.

const leia = require('readline-sync');

// Vetores para P1, P2 e média de cada aluno
let p1 = new Array(5);
let p2 = new Array(5);
let media = new Array(5);

// Variáveis auxiliares
let i;
let soma_medias = 0;

// Leitura das notas e cálculo das médias individuais
for (i = 0; i < 5; i++) {
    console.clear(); // Equivalente aproximado ao Limpatela()

    console.log(`Informe a P1 do aluno ${i + 1}:`);
    p1[i] = leia.questionFloat("");

    console.log(`Informe a P2 do aluno ${i + 1}:`);
    p2[i] = leia.questionFloat("");

    // Média do aluno i
    media[i] = (p1[i] + p2[i]) / 2;

    // Acumula a média para depois calcular a média da sala
    soma_medias = soma_medias + media[i];
}

console.clear();

// Exibe as notas e médias de cada aluno
for (i = 0; i < 5; i++) {
    console.log(`Aluno ${i + 1}`);
    console.log(" P1:", p1[i]);
    console.log(" P2:", p2[i]);
    console.log(" Média:", media[i]);
    console.log("------------------------");
}

// Média da sala (média das médias)
console.log("Média da sala:", (soma_medias / 5));