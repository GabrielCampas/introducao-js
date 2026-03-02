const leia = require('readline-sync');

// Equivalente ao "registro" do VisualG → objeto em JavaScript
let aluno = {
    nome: "",
    nota1: 0.0,
    nota2: 0.0,
    nota3: 0.0,
    media: 0.0
};

console.log("Nome do aluno: ");
aluno.nome = leia.question("");

console.log("Nota 1: ");
aluno.nota1 = leia.questionFloat("");

console.log("Nota 2: ");
aluno.nota2 = leia.questionFloat("");

console.log("Nota 3: ");
aluno.nota3 = leia.questionFloat("");

// Cálculo da média
aluno.media = (aluno.nota1 + aluno.nota2 + aluno.nota3) / 3;

// Exibição da média
console.log("\nMédia:", aluno.media.toFixed(2));

// Verificação de aprovação
if (aluno.media >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
}