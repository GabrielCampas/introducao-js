// Escreval("Qual é seu nome?")
// Leia(nome)
// Escreval("Olá ", nome)
const leia = require('readline-sync');
let nome = leia.question("Qual eh seu nome?");
console.log("Olá " + nome);
