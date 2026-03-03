const leia = require('readline-sync');

let maior_num = null
let menor_num = null
num =[]

for (let i = 0; i<10;i++){
    num[i] = Number(leia.question(`Digite o valor do ${i} numero:`))
    if (i == 0){
        maior_num = num [i]
        menor_num = num[i]
    }else{ 
        if(num[i] > maior_num){
            maior_num = num[i]
        }if(num[i] < menor_num){
            menor_num = num[i]
        }
    }
}

console.log(`O maior valor digitado foi ${maior_num}`)
console.log(`O menor valor digitado foi ${menor_num}`)