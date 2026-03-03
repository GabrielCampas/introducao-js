const leia = require('readline-sync')
let soma = 0

num = []

for (let i = 0; i<10; i++){

    // o readline-sync sempre volta a resposta como uma string, sempre que for pedir um número converter para number, parseInt, PaseFloat
    num[i] = Number(leia.question(`Digite o valor do ${i} numero:`))
    soma = soma + num[i]
}
console.log(num)
console.table(num)
console.log(`A soma de todos esses números foram: ${soma}`)