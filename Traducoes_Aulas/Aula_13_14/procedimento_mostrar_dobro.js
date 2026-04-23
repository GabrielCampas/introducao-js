// Exemplo de procedimento com parâmetro (passagem por valor).
// Mostra que alterar o parâmetro dentro do procedimento
// não altera a variável original do chamador.

const leia = require('readline-sync');

function mostrarDobro(numero) {
    numero = numero * 2;
    console.log("Dobro dentro do procedimento:", numero);
}

let x = 5;
mostrarDobro(x);
console.log("Valor original fora do procedimento:", x);
