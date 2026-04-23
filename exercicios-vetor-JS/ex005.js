const leia = require('readline-sync')
let valor = null
num =[]
for(let i=0;i<10;i++){
    num[i] = leia.question(`Digite o valor da ${i} posicao:`)
}
valor = leia.question("Digite um valor para saber se existe no Array:")
for (let i=0;i<10;i++){
    if (num[i] == valor){
        console.log(`O valor ${valor} esta presente no vetor, na posicao ${i}`)
    }else{
        console.log("Valor nao encontrado")
    }

}
