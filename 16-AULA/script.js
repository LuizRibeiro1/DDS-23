console.log("Bom dia");

// FUNÇÕES
// So executa
function teste() {
  console.log("Funcionou aqui");
}

teste();

console.log(teste);

// Com parâmetro
function teste2(parametro) {
  console.log("O parametro é: ", parametro);
}

teste2("Arroz")

// com retorno
function media(n1,n2,n3){
    var resultado = (n1 + n2 + n3) / 2
    return resultado
}

console.log(media(3,4,10))

// Guarda o valor do retorno em uma variável
var mediaFinal = media(8,6)
console.log("Sua média é:", mediaFinal)

// FUNÇÃO ANÕNIMA
// É uma função que não tem nome, e seu retorno é guardado em uma variável

var mensagem = function (){
    console.log("OI, MEU CHAPA")
}

// Mostra o texto da função
console.log(mensagem);

// Apenas guarda o texto da função, sem executar
mensagem

// Executa a função
mensagem()


// ARROW FUNCTION - FUNÇÃO DE SETA
// Forma mais comum de escrever funções no javascript
const multiplicar = (x,y) => {
    return x * y
}

console.log("Sua multiplicação deu:", multiplicar(20,12))

// Mais menor ainda
const dobro = numero => numero * 2 

console.log("O dobro é:", dobro(4))
