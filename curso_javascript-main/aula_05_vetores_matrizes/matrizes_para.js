/**
 * Aula baseada na aula do Visualg abaixo:
 * https://github.com/tiagotas/VISUALG_Algoritmos_Exemplo/blob/main/AULA%2009%20-%20MATRIZES.ALG
 */

const leia = require('readline-sync');

console.log("Bem-vindo ao Matriz");

nomes = [];

for (let i=0; i<3; i++)
{
    nomes[i] = [];
    for (let j=0; j<4; j++)
    {
        msg = `Digite o nome da linha ${i} e coluna ${j}: `;
        nomes[i][j] = leia.question(msg);
        console.table(nomes);
    }
}