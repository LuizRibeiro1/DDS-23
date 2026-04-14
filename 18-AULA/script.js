// Com arrays
var barquinho = ["Pedro", "Tiago", "João"];
var profissoes = ["Pescador", "Contador", "Carpinteiro"];

console.log("O ", barquinho[0], " é ", profissoes[0]);

// Com objeto
// { chave : valor}

var cantor = {
  // chave :
  nome: "Menos é mais",
  generoMusical: "Pagode",
  estaVivo: true,
  idade: 10,
};

// printa uam chave do objeto
console.log("O nome da banda é:", cantor.nome);
console.log("O genero da banda é:", cantor.generoMusical);

// typeoff(cantor)

// acessando propriedades
var intervalo = {
  horaInicio: "15h00",
  Horafim: "15h20",
  local: "Pátio",
  duracao: "20 min",
};

console.log("O intervalo inicia ás:", intervalo["horaInicio"]);

// Alterando um objeto

var garrafa = {};

// Adicionando novas propriedades
garrafa.cor = "Azul";
garrafa.tamanho = "600 ml";
garrafa.preco = 8.5;
garrafa["marca"] = "Suco Glub";

console.log(garrafa);

// Alterando valoresm de propriedades ja existentes
garrafa.cor = "Rosa";
garrafa["marca"] = "Topoué";

console.log(garrafa);

// OBJETOS
var animal = {
  // propriedades
  nome: "Tom",
  especie: "Garça",
  raça: "Adidas",

  // métodos
  falar : function(){
    console.log("SHAZAM")
  }, 
  andar : () => {
    console.log("FUUUUUUU")
  } ,
  dormir : () => {
    console.log("ZZZZZZZZZZZZZZZZZ");
  }
}

// mostrando um valor atraves da propriedade
console.log(animal.nome)

// mostra o texto da função
console.log(animal.falar)

// executa a função
animal.falar()