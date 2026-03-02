/**
 * Aula baseada na aula do Visualg abaixo:
 * https://github.com/tiagotas/VISUALG_Algoritmos_Exemplo/blob/main/AULA%2005%20-%20PARA_TABUADA.ALG
 */

const leia = require('readline-sync');

console.log("Bem-vindo ao SysMatemática");
let numero = leia.questionInt("Digite um numero inteiro: ");
console.log("Vamos fazer a tabuada do: " + numero);

for (let i=0; i<=10; i++) {
    let resultado = numero * i;
    console.log(numero + "x" + i + "=" + resultado);
} // equivalente ao Fimpara