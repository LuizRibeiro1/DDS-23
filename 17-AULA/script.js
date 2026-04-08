console.log("Sim")


// CALLBACK
// FUNÇÃO PRINCIPAL

// FUNÇÃO QUE SERÁ O CALLBACK
function finalizar(){
    console.log("Acabei")

}

// FUNÇÃO PRINCIPAL
function processar(callback){
    console.log("Iniciando o processamento das informações...")
    callback ()
}

// Executo a função principal, atrelado ao callback
processar(finalizar)



// CALLBACK COM FUNÇÃO ANONIMA
function executarTarefa(callback){
    console.log("Iniciando a execução da tarefa...")
    // executa uma funcao com delay
    setTimeout(callback, 3000)
}  

executarTarefa( () => {
    console.log("Acabou a tarefa")
})

// CALLBACK COM CONDIÇÃO SIMPLES
function verificarNota(nota, callback){
    if(nota >= 7){
         callback()
    }
}

function aprovado(){
    console.log("Congratulations, Você passou de ano")
}

verificarNota(8, aprovado)

// verificação com dois callbacks

// se deu certo
    function loginCorreto(){
        console.log("Parabens, logado com sucesso")

    }

// se deu errado
function loginErrado(){
        console.log("Parabens, errou com sucesso")
        
    }

    function validarSenha(senha, sucesso, erro){
        if(senha == "1234"){
            sucesso()
        }
        // Se deu errado, chama o outro callback
        else{
            erro()
        }
    }

    console.log("------------------------------")
// executar os testes
// com senha errado
validarSenha("7", loginCorreto, loginErrado)

console.log("----------------------------------")
// Com senha certa
validarSenha("1234", loginCorreto, loginErrado)