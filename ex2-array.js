// exercicio de numeros usando arrays. 

const leia = require('readline-sync');

// declarando os arrays
numeros = [];
i = [];

// pedindo os numeros
console.log("=== Digite abaixo cinco numeros aleatorios. ===");
console.log(" ")
// os numeros digitados serao guardados na var numeros[i]
for(let i=0; i<5; i++)
{
    msg = `${i+1} Numero: `;
    numeros[i] = leia.question(msg);
    
}

// os numeros digitados sairão na ordem digitada 
console.log(`Seus numeros digitados, em ordem de digitacao, foram: ${numeros} .`);