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

    let numeroCartaMaquina = cartas[Math.floor(Math.random() * cartas.length)];

    let numeroCartaJogador = cartas[Math.floor(Math.random() * cartas.length)];

    while (numeroCartaMaquina == numeroCartaJogador) {
        numeroCartaJogador = cartas[Math.floor(Math.random() * cartas.length)];
    }
    //document.getElementById('btnSortear');
}

//40:33