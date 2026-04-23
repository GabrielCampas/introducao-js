const leia = require('readline-sync');

// Equivalente ao "vetor[1..5] de registro" do VisualG → array de objetos
let carros = [];
let i;

// Leitura dos dados
for (i = 0; i < 5; i++) {

    console.log(`Modelo do carro ${i + 1}: `);
    let modelo = leia.question("");

    console.log("Ano: ");
    let ano = leia.questionInt("");

    carros[i] = {
        modelo: modelo,
        ano: ano
    };

    console.log();
}

// Exibição dos carros com ano > 2015
console.log("Carros com ano > 2015:");
for (i = 0; i < 5; i++) {
    if (carros[i].ano > 2015) {
        console.log("Modelo:", carros[i].modelo, "- Ano:", carros[i].ano);
    }
}
