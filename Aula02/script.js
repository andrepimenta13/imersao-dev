const Converter = () => {
    const valor = document.getElementById('valor').value;
    const valorConvertidoBitcoin = document.querySelector('#valorEmBitcoin');

    if (valor === '' || valor == 0) {
        alert('Insira um valor em Dólares!');
        valorConvertido.innerHTML = '';
        valorConvertidoBitcoin.innerHTML = '';
    } else {

        const valorEmDolarNumerico = parseFloat(valor); //passar para float

        const valorEmReal = (valorEmDolarNumerico * 5.06); //fazer a conversão

        const valorConvertido = document.querySelector('#valorConvertido');

        const valorEmBitcoin = (valorEmDolarNumerico * 0.000026)

        valorConvertidoBitcoin.innerHTML = `O resultado em Bitcoin é ${valorEmBitcoin.toFixed(3)}!`

        valorConvertido.innerHTML = `O resultado em Real é R$${valorEmReal.toFixed(3)}!`; //toFixed é para colocar um limite de casas decimais
    }
}

const ConverterEuro = () => {
    const valor = document.getElementById('valor').value;
    const valorConvertidoBitcoin = document.querySelector('#valorEmBitcoin');

    if (valor === '' || valor == 0) {
        alert('Insira um valor em Dólares!');
        valorConvertido.innerHTML = '';
        valorConvertidoBitcoin.innerHTML = '';
    } else {

        const valorEmDolarNumerico = parseFloat(valor); //passar para float

        const valorEmEuro = (valorEmDolarNumerico * 0.92); //fazer a conversão

        const valorConvertido = document.querySelector('#valorConvertido');

        const valorEmBitcoin = (valorEmDolarNumerico * 0.000028)

        valorConvertidoBitcoin.innerHTML = `O resultado em Bitcoin é ${valorEmBitcoin.toFixed(3)}!`

        valorConvertido.innerHTML = `O resultado em Euros é ${valorEmEuro.toFixed(3)}€!`; //toFixed é para colocar um limite de casas decimais
    }
}

const ConverterLibra = () => {
    const valor = document.getElementById('valor').value;
    const valorConvertidoBitcoin = document.querySelector('#valorEmBitcoin');

    if (valor === '' || valor == 0) {
        alert('Insira um valor em Dólares!');
        valorConvertido.innerHTML = '';
        valorConvertidoBitcoin.innerHTML = '';
    } else {

        const valorEmDolarNumerico = parseFloat(valor); //passar para float

        const valorEmLibra = (valorEmDolarNumerico * 0.76); //fazer a conversão

        const valorConvertido = document.querySelector('#valorConvertido');

        const valorEmBitcoin = (valorEmDolarNumerico * 0.000034)

        valorConvertidoBitcoin.innerHTML = `O resultado em Bitcoin é ${valorEmBitcoin.toFixed(3)}!`

        valorConvertido.innerHTML = `O resultado em Euros é ${valorEmLibra.toFixed(3)}€!`; //toFixed é para colocar um limite de casas decimais
    }
}