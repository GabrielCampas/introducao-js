const leia = require('readline-sync');

// Equivalente ao "vetor[1..5] de registro" do VisualG → array de objetos
let alunos = [];
let soma = 0;
let idadeMaisNova = 999;
let maiores18 = 0;
let indiceMaisNovo = 0;
let media;

// Leitura dos dados, soma das idades, verificação do mais novo e contagem dos maiores de 18
for (let i = 0; i < 5; i++) {

    console.log(`Nome do aluno ${i + 1}: `);
    let nome = leia.question("");

    console.log("Idade: ");
    let idade = leia.questionInt("");

    alunos[i] = {
        nome: nome,
        idade: idade
    };

    soma = soma + idade;

    if (idade < idadeMaisNova) {
        idadeMaisNova = idade;
        indiceMaisNovo = i;
    }

    if (idade >= 18) {
        maiores18 = maiores18 + 1;
    }

    console.log();
}

// Cálculo da média
media = soma / 5;

// Exibição dos resultados
console.log("Idade média:", media.toFixed(2));
console.log("Aluno mais novo:", alunos[indiceMaisNovo].nome);
console.log("Alunos com 18 anos ou mais:", maiores18);