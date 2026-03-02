const leia = require('readline-sync');

console.log("Bem-vindo ao SysMatemática");
let numero = leia.question("Digite um número inteiro: ");
console.log("Vamos fazer a tabuada do " + numero);

for (let i = 0; i <= 10; i++) { // i++ é mesma coisa que i = i + 1
    let resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);
} // equivalente ao "fimpara"