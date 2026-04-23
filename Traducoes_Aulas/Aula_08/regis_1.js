const leia = require('readline-sync');

// Equivalente ao "registro" do VisualG → objeto em JavaScript
let pessoa = {
    nome: "",
    idade: 0,
    altura: 0.0
};

console.log("Digite o nome: ");
pessoa.nome = leia.question("");

console.log("Digite a idade: ");
pessoa.idade = leia.questionInt("");

console.log("Digite a altura: ");
pessoa.altura = leia.questionFloat("");

// Exibição dos dados
console.log("\nDados da pessoa:");
console.log("Nome:", pessoa.nome);
console.log("Idade:", pessoa.idade);
console.log("Altura:", pessoa.altura);