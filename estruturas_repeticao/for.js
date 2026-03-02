// o for equivale ao "PARA" do VisualG


const leia = require('readline-sync')

console.log("Bem vindo a Tabuada")
let numero = leia.questionInt("Digite um numero inteiro");
console.log("Vamos fazer a tabuada do: " + numero);

// a variavel i só vai existir dentro do for
// o "i++" é a mesma coisa que "i = i+1"
for (let i=0; i<=10; i++) {
    let resultado = numero * i;
    console.log(numero + " x " + i + " = " + resultado);

} // equivale ao "FIMPARA"
