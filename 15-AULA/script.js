/*
console.log("Oi moundo")

// LAÇOS DE REPETIÇÃO

// FOR = PARA
// i = variável de controle
// i < 5 = duração do laço
// i++ = aumenta de 1 em 1 
for(var i = 0; i < 10; i++){
    console.log("Estou aqui no laço")
}

console.log("Finalizei o loop")

// While = enquanto
var c = 1

// (Coloca a condição pra entrar no loop)
while(c < 10){
    console.log("oi bom dia")
    c++
    // Se não tiver algo pra tirar do loop 
    // Ele fica aqui pra sempre
}

console.log("Finalizei o loop denovo")


// ARRAY
var array = ["Neymar", 10, true, 5.0]


// Mostra todo o array
console.log(array)

// Mostra um elemento especifico do array
console.log(array[2])

array[2] = "Jogador"

// Mostra todo o array
console.log(array)
 */

/*
// Lista dos melhores times do mundo
var times = ["Brasil", "Real Madrid", "Gama", "Santos", "Paysandu"]

for(var i = 0; i < 2; i++){
    console.log("O time atual é:", times[i])
}

// Lenght - descobre o tamanho do array
console.log(times.length);

console.log("--------------------------")
// Faz a repetição até o fim do array
// Independente do tamanho, com o .lenght
for(var i = 0; i < times.length; i++){
    console.log("O time atual é:", times[i])
}
console.log("-----------------------------------")
// FOR ESPECIFICO DE ARRAY
// index - guarda o valor do indice
// in - usa o valor do indice pra mostrar o elemento
// times - define o array
for(var index in times){
    console.log("Indice atual:", index)
    console.log("Valor do indice atual:", times[index])
}

// of - já sabe o valor do elemento
for(var index of times){
    console.log(index)
}
*/

/*
// FUNÇÕES PRA INTERAGIR COM UM ARRAY

// array inicial
var frutas = ["Maçã", "Pêra", "Banana"];

// mostra o array
console.log(frutas);

// push() - adiciona no fim do array
frutas.push("Uva");

console.log(frutas);

// unshift - adiciona no inicio do array
frutas.unshift("Laranja");

console.log(frutas);

// PRA REMOÇÃO DE ELEMENTOS
// pop - remove o ultimo elemento
var frutaTirada = frutas.pop();
console.log("Fruta removida:", frutaTirada);

// shift - remove o primeiro elemento
var exSegundaFruta = frutas.shift();
console.log("Ex segunda fruta:", exSegundaFruta);

// Descobrir o index de um elemento
var index = frutas.indexOf("Pêra");
console.log("O index dele é:", index);

// descobrir se há um valor especifico no array
console.log("Tem pitu?:", frutas.includes("Pitu"));
console.log("Tem maçã?:", frutas.includes("Maçã"));

// ordena os elementos
frutas.sort();
console.log(frutas);

// Inverte a ordem dos elementos do array
frutas.reverse();
console.log(frutas);

//  Convertendo o array pra string
// Converte todo o array
console.log("Convertido:", frutas.toString())

// Junta um array, ou converte colocando um separador
console.log("Convertido:", frutas.join(" - "))

// SLICE - copia parte do array
// (de onde Começa, quantos elementos estarão na cópia)
var copiaParte = frutas.slice(0,2)
console.log("Copia:", copiaParte)

// SPLICE 
// PRA REMOVER
var removidos = frutas.splice(1,1)
console.log("Após remoção:",frutas)

// PRA ADICIONAR
console.log("Após adição:",frutas)
frutas.splice(1,0, "Pitaya", "Melancia", "Morango")

// (de onde começa, quantos serão substituidos, valores)
frutas.splice(2,1,"Arroz")
console.log("Após substituição:",frutas)
*/


