const leia = require('readline-sync')


num =[]

for(let i=1; i<=5; i++){
    num[i] = leia.question("Digite o numero da "+i+" posicao:")
}
console.log("A ordem dos numeros digitados foram:")
for (let i=1; i<=5; i++){
    console.log(num[i])
}