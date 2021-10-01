var player1 = { nome: "Michelle", vitorias: 13, empates: 3, derrotas: 5, pontos: 0 };
//              chave | valor
var player2 = { nome: "Aurora", vitorias: 7, empates: 2, derrotas: 6, pontos: 0 };

// console.log(player1.nome);
// console.log(player2.vitorias);

function calculaPontos(jogador){
    var pontos = (jogador.vitorias * 3) + jogador.empates;
    // console.log(pontos);
    return pontos;
}

player1.pontos = calculaPontos(player1);
player2.pontos = calculaPontos(player2);

var players = [player1, player2];

// console.log(players);

function exibirJogadores(jogadores){
    var elemento ="";
    for (var i = 0; i < jogadores.length; i++) {
        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td><button onClick='adicionarVitoria(" + i + ")'>Vitória</button></td>"
        elemento += "<td><button onClick='adicionarEmpate(" + i + ")'>Empate</button></td>"
        elemento += "<td><button onClick='adicionarDerrota(" + i + ")'>Derrota</button></td>"
        elemento += "</tr>"
    }

    var tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = elemento;
}

exibirJogadores(players);

function adicionarVitoria(i){
    var jogador = players[i];
    jogador.vitorias++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadores(players);
}

function adicionarEmpate(i){
    var jogador = players[i];
    jogador.empates++;
    jogador.pontos = calculaPontos(jogador);
    exibirJogadores(players);
}

function adicionarDerrota(i){
    var jogador = players[i];
    jogador.derrotas++;
    exibirJogadores(players);
}
