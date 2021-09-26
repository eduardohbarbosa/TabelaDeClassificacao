var listaJogadores = []
var divAcoes = document.querySelector("#acoes")

/*Verifica se o Jogador já existe na Lista*/
function jogadorExiste(jogador){
    for(i = 0; i < listaJogadores.length; i++){
        if(listaJogadores[i].nome.toUpperCase().indexOf(jogador.toUpperCase()) != -1 & listaJogadores[i].nome.toUpperCase() == jogador.toUpperCase()){
            return true
        }
    }

    return false
}

//Exibe o jogador na tela
function exbirJogador(){
    var camposTabela = ''
    for(var i = 0; i < listaJogadores.length; i++){    
        camposTabela += `<tr>`
        camposTabela += `<td>${listaJogadores[i].nome}</td>`
        camposTabela += `<td>${listaJogadores[i].vitorias}</td>`
        camposTabela += `<td>${listaJogadores[i].empates}</td>`
        camposTabela += `<td>${listaJogadores[i].derrotas}</td>`
        camposTabela += `<td>${listaJogadores[i].pontos}</td>`
        camposTabela += `<td>`
        camposTabela += `<button onclick="adicionarVitoria(${i})">Vitoria</button>`
        camposTabela += `<button onclick="adicionarEmpate(${i})">Empate</button>`
        camposTabela += `<button onclick="adicionarDerrota(${i})">Derrota</button>`
        camposTabela += `</td>`
        camposTabela += `</tr>`
    }

    var tabelaJogadores = document.querySelector("#tabelaJogadores")
    tabelaJogadores.innerHTML = camposTabela
}

//FUNÇÕES DE CRIAÇÃO DE JOGADOR

//Cria o input e o botão de criação de um novo jogador
function adicionarJogador(){
    divAcoes.innerHTML = `<p>Nome do Jogador: <input type="txt" id="nomeJogador"></p>`
    divAcoes.innerHTML += `<button class="btnAcao" onclick="criarJogador(nomeJogador.value)"><span>Adicionar<span></button>`
}

//Cria o objeto do jogador com nome, numero de vitorias, empates e derrotas e seu pontos
function criarJogador(jogador){
    var jogadorNaLista = jogadorExiste(jogador)

    if(jogadorNaLista == false){
        var jogador = {
            nome: jogador, 
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            pontos: 0
        }

        listaJogadores.push(jogador)
        exbirJogador()
    }else if(jogadorNaLista == true){
        alert("Jogador já existe")
    }

    divAcoes.innerHTML = `<button class="btnAcao" onclick="adicionarJogador()"><span>Novo Jogador</span></button>`
    divAcoes.innerHTML += `<button class="btnAcao" onclick="excluirJogador()"><span>Excluir Jogador</span></button>`
}

//FUNÇÕES PARA EXCLUIR UM JOGADOR EXISTE

//Cria o input e o botão de exclusão de um novo jogador
function excluirJogador(){
    divAcoes.innerHTML = `<p>Nome do Jogador: <input type="txt" id="nomeJogador"></p>`
    divAcoes.innerHTML += `<button class="btnAcao" onclick="deletarJogador(nomeJogador.value)"><span>Adicionar<span></button>`
}

//Exclui o jogador da lista e atualiza a exibição
function deletarJogador(jogador){
    var jogadorNaLista = jogadorExiste(jogador)

    if(jogadorNaLista == true){
        for (i = 0; i < listaJogadores.length; i++){
            if(listaJogadores[i].nome.toUpperCase() == jogador.toUpperCase()){
                listaJogadores.splice(i, 1)
            }
        }
        exbirJogador()
    }else if(jogadorNaLista == false){
        alert("Jogador não está na tabela")
    }


    divAcoes.innerHTML = `<button class="btnAcao" onclick="adicionarJogador()"><span>Novo Jogador</span></button>`
    divAcoes.innerHTML += `<button class="btnAcao" onclick="excluirJogador()"><span>Excluir Jogador</span></button>`
}

//FUNÇÕES DE PONTUAÇÕES
function calculaPontos(jogador){
    var pontos = jogador.vitorias * 3 + jogador.empates
    return pontos
}

function adicionarVitoria(i){
    var jogador = listaJogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exbirJogador()
}

function adicionarEmpate(i){
    var jogador = listaJogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exbirJogador()
}

function adicionarDerrota(i){
    var jogador = listaJogadores[i]
    jogador.derrotas++
    exbirJogador()
}


//FUNÇÕES DE FINALIZAR A TABELA
function finalizar(){
    var divTabela = document.querySelector("#divTabela")
    var classificacao = []

    for (i = 0; i < listaJogadores.length; i++){
        if(classificacao.length == 0){
            classificacao.push(listaJogadores[i])
        }else if(listaJogadores[i].pontos > classificacao[0].pontos){
            classificacao[0] = listaJogadores[i]
        }else if(listaJogadores[i].pontos == classificacao[0].pontos){
            classificacao.push(listaJogadores[i])
        }
    }

    divTabela.innerHTML = ""

    if (classificacao.length == 1){
        divTabela.innerHTML += `<p>Vencedor ${classificacao[0].nome} com ${classificacao[0].pontos} pontos.</p>`
    }else if (classificacao.length > 1){
        divTabela.innerHTML += `<p>Empate entre:</p>`
        for(i = 0; i < classificacao.length; i++){
            divTabela.innerHTML += `${classificacao[i].nome} com ${classificacao[i].pontos} pontos.</p>`
        }
    }
    

    divTabela.innerHTML += `<button class="btnAcao" onclick="jogarNovamente()"><span>Reiniciar</span></button>`
}

function jogarNovamente(){
    document.location.reload()
}