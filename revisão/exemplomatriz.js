/**
 * Aula baseada na aula do Visualg abaixo:
 * https://github.com/tiagotas/VISUALG_Algoritmos_Exemplo/blob/main/AULA%2009%20-%20MATRIZES.ALG
 */

const leia = require('readline-sync');

console.log("Bem-vindo ao Matriz");

nomes = [[], [], []];

console.table(nomes);

// Matriz 3x4
// _|_|_|_
// _|_|_|_
// _|_|_|_
//
// [0] = []
// [1] = []
// [2] = []

nomes[0][0] = "Joao";
nomes[0][1] = "Maria";
nomes[0][2] = "José";
nomes[0][3] = "Helena";
nomes[1][0] = "Roberto";
nomes[1][1] = "Alexandre";

console.table(nomes);