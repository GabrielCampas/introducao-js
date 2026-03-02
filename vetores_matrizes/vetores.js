// os arrays são os "VETORES" do VisualG


const leia = require('readline-sync');

console.log("Estudando Array (Vetores) com JavaScript");

// nomes : vetor[1..5] de caracter
nomes = []; // <- vetor em js
nomes = ['João', 'Maria', 'José', 'Joana', 'Daniela'] // <- outro jeito de declarar arrays

nomes[0] = "João"
nomes[1] = "Maria"
nomes[2] = "José"   // <- + 1 jeito de declarar arrays
nomes[3] = "Joana"
nomes[4] = "Daniela"

console.log(nomes); // <- mostra os valores em suas posiçoes 
console.table(nomes); // <- cria uma "tabela" mostrando os index e os valores da variavel

for(let i=0; i<5; i++)
{
    msg = "Digite o nome da posicao " + i + ": ";
    nomes[i] = leia.question(msg);
}
for(let i=0; i<5; i++)
    console.log(`O nome na posicao ${i} é ${nomes[i]}`);


    //console.table(nomes);