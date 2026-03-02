// 


const leia = require('readline-sync');

console.log("Estudando Matrizes com JavaScript");

nomes = [];
for (let i=0; i<3; i++)
{
    nomes[i] = [];
    for(let j=0; j<4; j++)
    {
        msg = `Digite o nome da linha ${i} e coluna ${j}: `; // <- para interpolar strings mais facil usar crase e nao aspas
        nomes[i][j] = leia.question(msg);
        console.table(nomes);
    }
}
