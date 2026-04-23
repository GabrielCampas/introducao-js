const leia = require('readline-sync')

num = []

for (let i=0;i<6;i++){
    num[i] = leia.question(`Digite o ${i} numero:`)
}
console.log("A ordem inversa desse vetor ficara assim:")
/* VAI ACONTECER ENQUANTO O INDICE FOR MAIOR OU IGUAL A = 0*/
for(let i =6; i>=0; i--){
    console.log(num[i])
}
/* javascript ja tem a funcao reverse , que funciona para vetores tbm*/
console.log(num.reverse())