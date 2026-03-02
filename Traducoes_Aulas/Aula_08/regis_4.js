const leia = require('readline-sync');

// Equivalente ao "vetor[1..3] de registro" do VisualG → array de objetos
let livros = [];
let i;

// Leitura dos dados
for (i = 0; i < 3; i++) {

    console.log(`Livro ${i + 1} - Título: `);
    let titulo = leia.question("");

    console.log("Autor: ");
    let autor = leia.question("");

    console.log("Ano: ");
    let ano = leia.questionInt("");

    livros[i] = {
        titulo: titulo,
        autor: autor,
        ano: ano
    };

    console.log();
}

// Exibição dos dados
console.log("Lista de livros:");
for (i = 0; i < 3; i++) {
    console.log("Título:", livros[i].titulo);
    console.log("Autor:", livros[i].autor);
    console.log("Ano:", livros[i].ano);
    console.log("-------------------------");
}
