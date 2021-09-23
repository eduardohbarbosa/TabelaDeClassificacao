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

/*Exibe o jogador na tela*/
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
        camposTabela += `<button onclick="adicionarVitoria()">Vitoria</button>`
        camposTabela += `<button onclick="adicionarEmpate()">Empate</button>`
        camposTabela += `<button onclick="adicionarDerrota()">Derrota</button>`
        camposTabela += `</td>`
        camposTabela += `</tr>`
    }

    var tabelaJogadores = document.querySelector("#tabelaJogadores")
    tabelaJogadores.innerHTML = camposTabela
}

/*Cria o input e o botão de criação de um novo jogador*/
function adicionarJogador(){
    divAcoes.innerHTML = `<p>Nome do Jogador: <input type="txt" id="nomeJogador"></p>`
    divAcoes.innerHTML += `<button class="btnAcao" onclick="criarJogador(nomeJogador.value)"><span>Adicionar<span></button>`
}

/*Cria o objeto do jogador com nome, numero de vitorias, empates e derrotas e seu pontos*/
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

/*Cria o input e o botão de exclusão de um novo jogador*/
function excluirJogador(){
    divAcoes.innerHTML = `<p>Nome do Jogador: <input type="txt" id="nomeJogador"></p>`
    divAcoes.innerHTML += `<button class="btnAcao" onclick="deletarJogador(nomeJogador.value)"><span>Adicionar<span></button>`
}

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
