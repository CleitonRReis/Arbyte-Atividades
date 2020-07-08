let rs = require ('readline-sync')

let playerA = rs.question ('Qual o nome do primeiro jogador? \n')
let playerB = rs.question ('Qual o nome do segundo jogador? \n')

let listaTamanho = 5

let listaPlayerA = []
let listaPlayerB = []

console.log ('- Primeiro jogador, digite 5 numeros de 1 a 10 -')

for (let i = 1; i <= listaTamanho; i++){
    let respostaPlayerA = rs.questionInt(`Numero ${i} : `)
    if (respostaPlayerA > 0 && respostaPlayerA <= 10){
        listaPlayerA.push(respostaPlayerA)
    }else{
        console.log ('Numero não é entre 1 e 10.')
        i--
    }

    }

console.log ('- Segundo jogador, digite 5 numeros de 1 a 10 -')
for (let i = 1; i <= listaTamanho; i++){
    let respostaPlayerB = rs.questionInt(`Numero ${i} : `)
    if (respostaPlayerB > 0 && respostaPlayerB <= 10){
        listaPlayerB.push(respostaPlayerB)
    }else{
        console.log ('Numero não e entre 1 e 10.')
        i--
    }
}

let numerosDiferentes = []

console.log (` ${playerA} digitou: ${listaPlayerA} || ${playerB} digitou : ${listaPlayerB}`)

for (let i = 0; i < listaPlayerA.length; i++){
     if  (!listaPlayerB.includes(listaPlayerA[i])){
        numerosDiferentes.push(listaPlayerA[i])
     }
}
console.log(`Os numero que ${playerA} colocou de diferente de ${playerB} são: ${numerosDiferentes}.`)