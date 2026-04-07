/*
// MOSTRANDO UMA MENSAGEM NO CONSOLE
console.log("Bom dia, Boa tarde, Boa noite.");

// CAIXINHA DE ALERTA
//alert("Teste pra ver se funciona")

// CRIANDO VARIÁVEIS
var nome = "Cristiano"  //String ou cadeia
var numero = 7         //Int ou inteiro
var salto = 2.1       //Float ou real
var theBest = true    //bool ou lógico

// FUNÇÃO QUE MOSTRA O TIPO DA VARIÁVEL
console.log(typeof(nome))

console.log("Seu nome é: " + nome)
console.log("Seu numero é:", numero)
console.log("Seu pulo é:", salto)
console.log("É o pior?:", theBest)

nome = 10
console.log(typeof(nome))

// OUTROS TIPOS DE VARIÁVEL
var nulo = null
var indefinido = undefined
console.log(nulo)
console.log(indefinido)
*/

// OPERADORES ARITMÉTICOS
// +,-,*,/,%

/*
var a = 10 , b = 5 

console.log("Soma:", a + b)
console.log("Subtração:", a - b)
console.log("Multiplicação:", a * b)
console.log("Divisão:", a / b)
console.log("Módulo:", a % b)

// OPERADORES LÓGICOS
// E, OU, NÃO
// &&, ||, !

var verdade = true, mentira = false
console.log(verdade && mentira)
console.log(verdade || mentira)
console.log(verdade && !mentira)

// OPERADORES RELACIONAIS
// >, <, >=, <=, ==, !=, ===, !==


var x = 65, y = 32, z = "65"

console.log(x > y)
console.log(x < y)
console.log(x >= y)
console.log(x <= y)
console.log(x == y)
console.log(x != y)
// Verificando valor e tipo
console.log(x === y)
console.log(x !== y)
*/


// DESVIOS CONDICIONAIS

// SE = IF

/*
var estaVivo = true

// Primeira Comparação
if(estaVivo == true){
    console.log("Parabens, você está vivo")
}
// Segunda Comparação, caso a primeira dê errado
else if(estaVivo == undefined){
    console.log("Você não tá nada")
}
// Entra aqui, caso todas as outras comparações deem errado
else{
    console.log("Infelizmente, você foi de F ")
}

// SWITCH = ESCOLHA
var camisa = "Azul"

switch(camisa){
    case "Azul":
        console.log("Você ganhou 1 Milhão de dolares")
        break
        case "Branco":
            console.log("1 centavo")
        break
        case "Vermelho":
            console.log("Você ganhou um jantar com o messi e cristiano ronaldo")
        break
        default:
            console.log("Betinha ganhou nada")
        break
}
*/

//PROMPT - INTERAGE COM O USUÁRIO E COLETA UM VALOR 
/*
prompt("Digite seu nome: ")

var time = prompt("Me diga, pra quem você torce?")

console.log("Seu time é: ", time)
*/



// Entrega de Caixas
// 1 <= CaixaX <= CaixaY <= CaixaZ < 1000

var CaixaX = 40, CaixaY = 60, CaixaZ = 300
var pesoCaixa = 1000
var caso = undefined


var CaixaX = prompt("Informe o valor da caixa(1):")
var CaixaY = prompt("Informe o valor da caixa(2):")
var CaixaZ = prompt("Informe o valor da caixa(3):")

if(CaixaX < CaixaY < CaixaZ){
    
var somaCaixa = CaixaX + CaixaY + CaixaZ
    console.log("O valor da caixa é: ", CaixaX + CaixaY)
}



