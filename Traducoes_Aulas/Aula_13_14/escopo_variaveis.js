// Exemplo de escopo de variáveis: global x local.
// Tradução do algoritmo "EscopoVariaveis".

const leia = require('readline-sync');

// Variável global
let valor;

// Procedimento que declara uma variável local
function mostrarValor() {
    // Esta variável "valor" é LOCAL à função,
    // e NÃO é a mesma que a global.
    let valor = 10;
    console.log("Dentro do procedimento:", valor);
}

// Programa principal
valor = 5; // atribui à variável global
mostrarValor();
console.log("Fora do procedimento:", valor);
