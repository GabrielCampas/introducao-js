const leia = require('readline-sync');

// Equivalente ao "registro" do VisualG → objeto em JavaScript
let produto = {
    nome: "",
    preco: 0.0
};

let precoComDesconto;

console.log("Nome do produto: ");
produto.nome = leia.question("");

console.log("Preco: ");
produto.preco = leia.questionFloat("");

// Cálculo do preço com desconto (10%)
precoComDesconto = produto.preco * 0.9;

// Exibição dos dados
console.log("\nProduto:", produto.nome);
console.log("Preco original: R$", produto.preco.toFixed(2));
console.log("Preco com desconto: R$", precoComDesconto.toFixed(2));