let cartas = [];

let carta1 = {
    name: 'Bulbasauro',
    atributos: {
        ataque: 7,
        defesa: 8,
        magia: 6
    }
};
let carta2 = {
    name: 'Darth Vader',
    atributos: {
        ataque: 9,
        defesa: 8,
        magia: 2
    }
};
let carta3 = {
    name: 'Shiryu de dragão',
    atributos: {
        ataque: 5,
        defesa: 9,
        magia: 10
    }
};

cartas.push(carta1, carta2, carta3);

var cartaMaquina;
var cartaJogador;

function sortearCarta() {

    cartaMaquina = cartas[Math.floor(Math.random() * cartas.length)];

    cartaJogador = cartas[Math.floor(Math.random() * cartas.length)];

    while (cartaMaquina == cartaJogador) {
        cartaJogador = cartas[Math.floor(Math.random() * cartas.length)];
    }

    document.getElementById('btnSortear').disabled = true;
    document.getElementById('btnJogar').disabled = false;

    exibirOpcoes(cartaJogador);
}

function exibirOpcoes(cartaJogador) {
    let opcoes = document.getElementById('opcoes');

    let opcoesTexto = "";

    for (var atributo in cartaJogador.atributos) {
        opcoesTexto += "<input type = 'radio' name = 'atributo' value = '" + atributo + "'>" + atributo;
    }
    opcoes.innerHTML = opcoesTexto;
}

function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");

    for (var index = 0; index < radioAtributos.length; index++) {

        if (radioAtributos[index].checked == true) {
            return radioAtributos[index].value;
        }
    }
}

function jogar() {
    let atributoSelecionado = obtemAtributoSelecionado();
    let elementoResultado = document.getElementById('resultado');

    let valorCartaJogador = cartaJogador.atributos[atributoSelecionado];
    let valorCartaMaquina = cartaMaquina.atributos[atributoSelecionado];

    if (valorCartaJogador > valorCartaMaquina) {
        elementoResultado.innerHTML = 'Você venceu!';
    } else if (valorCartaJogador < valorCartaMaquina) {
        elementoResultado.innerHTML = "Você perdeu!";
    } else {
        elementoResultado.innerHTML = "Empatou!";
    }

}