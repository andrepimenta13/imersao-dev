// Objects: key + value

let rafa = {
    nome: "Rafa",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
};
let paulo = {
    nome: "Paulo",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
};
let gui = {
    nome: "Gui",
    vitorias: 0,
    empates: 0,
    derrotas: 0,
    pontos: 0
};

function calculaPontos(jogador) {
    var pontos = jogador.vitorias * 3 + jogador.empates;
    return pontos;
};

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);
gui.pontos = calculaPontos(gui);

let jogadores = [rafa, paulo, gui];

function exibeJogadoresNaTela(jogadores) {
    let elemento = "";
    for (let index = 0; index < jogadores.length; index++) {
        elemento += "<tr><td>" + jogadores[index].nome + "</td>";
        elemento += "<td>" + jogadores[index].vitorias + "</td>";
        elemento += "<td>" + jogadores[index].empates + "</td>";
        elemento += "<td>" + jogadores[index].derrotas + "</td>"
        elemento += "<td>" + jogadores[index].pontos + "</td>"
        elemento += "<td><button onClick='adicionarVitoria(" + index + ")'>Vitória</button></td>";
        elemento += "<td><button onClick='adicionarEmpate(" + index + ")'>Empate</button></td>";
        elemento += "<td><button onClick='adicionarDerrota(" + index + ")'>Derrota</button></td>"
        elemento += "</tr>";
    }

    var tabelaJogadores = document.getElementById('tabelaJogadores');
    tabelaJogadores.innerHTML = elemento;
}

exibeJogadoresNaTela(jogadores);

function adicionarVitoria(index) {
    jogadores[index].vitorias++;
    jogadores[index].pontos = calculaPontos(jogadores[index]);
    exibeJogadoresNaTela(jogadores);
};

function adicionarEmpate(index) {
    jogadores[index].empates++;
    jogadores[index].pontos = calculaPontos(jogadores[index]);
    exibeJogadoresNaTela(jogadores);
};

function adicionarDerrota(index) {
    jogadores[index].derrotas++;
    exibeJogadoresNaTela(jogadores);
};

function apagarDados() {
    jogadores.forEach(element => {
        element.vitorias = 0;
        element.empates = 0;
        element.derrotas = 0;
        element.pontos = 0;
    });
    exibeJogadoresNaTela(jogadores);
}

function adicionarJogador() {
    let nome = document.getElementById('novoJogador').value;
    if (nome.value == '') {
        alert('Insira um nome válido!')
    } else {
        let novoJogador = {
            nome: nome,
            vitorias: 0,
            empates: 0,
            derrotas: 0,
            pontos: 0
        }
        jogadores.push(novoJogador);
        exibeJogadoresNaTela(jogadores);
        document.getElementById('novoJogador').value = '';
    }
}