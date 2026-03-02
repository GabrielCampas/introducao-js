// Escreval ("Qual é seu nome?")
// Leia(nome)
// Escreval("Olá ", nome)
const leia = require('readline-sync');
// O "question" pega o que o usuário escreve e coloca na variavel local "nome"
let nome = leia.question("Qual o seu nome?")
console.log("Olá " + nome);