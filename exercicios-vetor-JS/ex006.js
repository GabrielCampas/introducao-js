const leia = require('readline-sync')
let md = null
notas_total = null
notas =[]
for (let i = 0;i<10;i++){
    notas[i] = Number(leia.question(`Digite a nota do ${i} aluno:`))
    notas_total = notas_total + notas[i]
}
md = notas_total / 10

console.log(`A média das notas foram: ${md}`)
console.log("Segue para ver quais alunos passaram")
for (let i =0; i<10; i++){
    if (notas[i] >= md){
        console.log(`O aluno ${i} passsou com nota ${notas[i]}`)
    }
}