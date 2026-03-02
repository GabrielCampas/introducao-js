/**
 * Aula baseada na aula do Visualg abaixo:
 * https://github.com/tiagotas/VISUALG_Algoritmos_Exemplo/blob/main/AULA%2008%20-%20VETORES.ALG
 */

const leia = require('readline-sync');

console.log("Estudando Array (Vetores) com JavaScript");

// nomes : vetor[1..5] de caracter
nomes = [];

//nomes = ['João', 'Maria', 'José', 'Joana', 'Daniela'];

/*nomes[1] = "João"
nomes[2] = "Maria"
nomes[3] = "José"
nomes[4] = "Joana"
nomes[5] = "Daniela"*/

//console.log(nomes);
//console.table(nomes);

for(let i=0; i<5; i++)
{
    msg = "Digite o nome da posicao " + i + ": ";
    nomes[i] = leia.question(msg);
}

for( let i=0; i<5; i++)
    console.log(`O nome na posição ${i} é ${nomes[i]}`);

//console.table(nomes);

