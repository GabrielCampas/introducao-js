const leia = require('readline-sync');

// Introdução à vetores em javascript
console.log("Estudando vetores com JavaScript");

// vetor no visual g
// nomes : vetor[1..5] de caracter
// no javascript fica assim. Não preciso declarar posição inicial nem final.
// Abaixo a primeira forma. 
// PRIMEIRA MANEIRA: 
// nomes = [];

// nomes[0] = "João";
// nomes[1] = "Maria";
// nomes[2] = "José";
// nomes[3] = "Roberto";
// nomes[4] = "Marina";

// SEGUNDA MANEIRA
// Agora uma outra forma de declarar vetores.

// nomes = ['João', 'Maria', 'José', 'Roberto', 'Marina'];

// TERCEIRA MANEIRA
nomes = [];

for (let i = 0; i < 5; i++) {
    msg = "Digite o nome da posicao " + i + ": ";
    nomes[i] = leia.question(msg);
}

console.log(" --- Mostrando nomes --- ");
console.log(" ");

for (let i = 0; i < 5; i++) {
    console.log(`O nome na posição ${i} é ${nomes[i]}`);
}

// console.table(nomes);


