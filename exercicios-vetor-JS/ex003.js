const leia = require('readline-sync')
let pares = 0
num = []

for (let i=0; i<8;i++){
    num[i] = Number(leia.question(`Digite o valor do ${i} numero:`))
    if (num[i] % 2 == 0){
        pares +=1 
    }
}
console.log(num)
console.log(`O total de numeros pares digitados foram: ${pares}`)