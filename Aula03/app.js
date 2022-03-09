let numeroSecreto = Math.floor(Math.random() * 11);
let tentativasMax = 5;
let tentativas = 0;

const Chutar = () => {
    let chute = parseInt(document.getElementById('valor').value);
    let element = document.getElementById('valor').value;

    if (chute < 0 || chute > 10 || element === '') {
        alert('Insira um número de 0 a 10, por favor!')
        document.getElementById('valor').value = "";

    } else if (chute === numeroSecreto) {
        tentativas++;
        alert(`Esse é o número secreto! Parabéns, você acertou na tentativa número ${tentativas}!`)
        tentativas = 0;
        document.getElementById('valor').value = "";
        numeroSecreto = Math.floor(Math.random() * 11);

    } else if (chute > numeroSecreto) {
        tentativas++;
        alert(`Não é esse o número secreto! O número secreto é menor. Esta é a sua tentativa número ${tentativas}!`)
        document.getElementById('valor').value = "";

    } else if (chute < numeroSecreto) {
        tentativas++
        alert(`Não é esse o número secreto! O número é maior. Esta é a sua tentativa número ${tentativas}!`)
        document.getElementById('valor').value = "";
    }

    if (tentativas >= tentativasMax) {
        alert(`Chegou ao limite de ${tentativas} tentativas. O número secreto é 3!`);
        tentativas = 0;
        document.getElementById('valor').value = "";
        numeroSecreto = Math.floor(Math.random() * 11);
    }
    console.log(numeroSecreto)
}