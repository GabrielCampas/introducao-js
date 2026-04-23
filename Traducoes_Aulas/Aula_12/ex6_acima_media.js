// Exercício 6 - Notas acima da média
// Lê as notas de 10 alunos, calcula a média da turma e mostra quais notas ficaram acima da média.

const leia = require('readline-sync');

// Vetor para armazenar as notas (valores reais)
let notas = new Array(10);

// Variáveis para soma e média
let soma = 0;
let media = 0;

// Controle de laço
let i;

// Leitura das notas dos 10 alunos
for (i = 0; i < 10; i++) {
    let nota = leia.questionFloat(`Digite a nota do aluno ${i + 1}: `);
    notas[i] = nota;
    soma = soma + notas[i]; // acumula na soma
}

// Cálculo da média da turma
media = soma / 10;

// Exibe a média com 2 casas decimais
console.log("Média da turma:", media.toFixed(2));

// Exibe as notas acima da média
console.log("Notas acima da média:");
for (i = 0; i < 10; i++) {
    if (notas[i] > media) {
        console.log(`Aluno ${i + 1}: ${notas[i].toFixed(2)}`);
    }
}