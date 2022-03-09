let numeroSecreto = Math.floor(Math.random() * 11); //podiamos fazer de outra forma: parseInt(Math.random() * 11)
let tentativasMax = 5;
let tentativas = 0;

const Chutar = () => {
    let chute = parseInt(document.getElementById('valor').value);
    let element = document.getElementById('valor').value;
    let resultado = document.getElementById('resultado');

    if (chute < 0 || chute > 10 || element === '') {
        resultado.innerHTML = ('Insira um número de 0 a 10, por favor!');
        document.getElementById('valor').value = "";

    } else if (chute === numeroSecreto) {
        tentativas++;
        resultado.innerHTML = (`Parabéns, ${numeroSecreto} é o número secreto! Você acertou na tentativa número ${tentativas}!`)
        tentativas = 0;
        document.getElementById('valor').value = "";
        numeroSecreto = Math.floor(Math.random() * 11);

    } else if (chute > numeroSecreto) {
        tentativas++;
        resultado.innerHTML = (`Não é esse o número secreto! O número secreto é menor. Esta é a sua tentativa número ${tentativas}!`)
        document.getElementById('valor').value = "";

    } else if (chute < numeroSecreto) {
        tentativas++
        resultado.innerHTML = (`Não é esse o número secreto! O número é maior. Esta é a sua tentativa número ${tentativas}!`)
        document.getElementById('valor').value = "";
    }

    if (tentativas >= tentativasMax) {
        resultado.innerHTML = (`Chegou ao limite de ${tentativas} tentativas. O número secreto é ${numeroSecreto}!`);
        tentativas = 0;
        document.getElementById('valor').value = "";
        numeroSecreto = Math.floor(Math.random() * 11);
    }
}

const Reset = () => {
    tentativas = 0;
    document.getElementById('valor').value = "";
    numeroSecreto = Math.floor(Math.random() * 11);
    resultado.innerHTML = ('')
}