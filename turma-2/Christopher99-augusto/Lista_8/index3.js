let rs = require("readline-sync")

let marca = rs.question("Qual marca do seu carro ? \n")

let modelo = rs.question("Qual modelo do seu carro ? \n")

let cor = rs.question("Qual a cor do seu carro ? \n")

let motor = rs.question("Qual motor tem o seu carro ? \n")

let carro ={
    marca : marca, 
    modelo : modelo,
    cor : cor,
    motor : motor,
}
console.log(carro)