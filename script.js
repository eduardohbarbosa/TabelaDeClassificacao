var eduardo = {nome: "eduardo", vitoria: 0, empates: 0, derrotas: 0, pontos: 0}

var listaJogadores = [eduardo]

function adicionarJogador(){
    var campoJogador = document.querySelector("#acoes")
    campoJogador.innerHTML += `<p>Nome do Jogador: <input type="txt" id="nomeJogador"></p>`
    campoJogador.innerHTML += `<button class="btnAcao" onclick="criarJogador(nomeJogador.value)"><span>Adicionar<span></button>`
}

function criarJogador(jogador){
    if(listaJogadores.indexOf(jogador) == -1){
        var jogador = {
            nome: jogador, 
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            pontos: 0
        }

        var camposTabela = ''
        camposTabela += `<tr>`
        camposTabela += `<td>${jogador.nome}</td>`
        camposTabela += `<td>${jogador.vitorias}</td>`
        camposTabela += `<td>${jogador.derrotas}</td>`
        camposTabela += `<td>${jogador.empates}</td>`
        camposTabela += `<td>${jogador.pontos}</td>`
        camposTabela += `<td>`
        camposTabela += `<button onclick="adicionarVitoria()">Vitoria</button>`
        camposTabela += `<button onclick="adicionarEmpate()">Empate</button>`
        camposTabela += `<button onclick="adicionarDerrota()">Derrota</button>`
        camposTabela += `</td>`
        camposTabela += `</tr>`
    
        var tabelaJogadores = document.querySelector("#tabelaJogadores")
        tabelaJogadores.innerHTML += camposTabela

        return listaJogadores.push(jogador)
    }else if(listaJogadores.indexOf(jogador) != -1 ) {
        alert("Jogador já existe")
    }

}

criarJogador("Eduardo")
criarJogador("Ana")