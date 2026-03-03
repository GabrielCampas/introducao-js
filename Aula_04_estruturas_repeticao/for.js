const leia = require('readline-sync');

// Usando 'for' para criar uma tabuada
console.log("Bem-vindo ao SysMatematica");

// Variável 'numero' recebe valor de um número inteiro
let numero = leia.question("Digite um numero inteiro: ");

// Iniciando a tabuada
console.log("Vamos fazer a tabuada do " + numero);

// No começo, i vale zero
// Código irá rodar enquanto o valor de i for menor ou igual a 10
// i++ incrementa, somando 1 ao valor do i 
for (let i = 0; i <= 10; i++) {
    
    // Pega a variável 'numero' que foi colocada antes e multiplica por 'i'
    let resultado = numero * i;
    console.log(`${numero} x ${i} = ${resultado}.`);
}