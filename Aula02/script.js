const Converter = () => {
    const valor = document.getElementById('valor').value;

    if (valor === '' || valor == 0) {
        alert('Insira um valor em Dólares!');
        valorConvertido.innerHTML = '';
        valorConvertidoBitcoin.innerHTML = '';
    } else {

        const valorEmDolarNumerico = parseFloat(valor); //passar para float

        const valorEmReal = (valorEmDolarNumerico * 5.06); //fazer a conversão

        const valorConvertido = document.querySelector('#valorConvertido');
        const valorConvertidoBitcoin = document.querySelector('#valorEmBitcoin');

        const valorEmBitcoin = (valorEmDolarNumerico * 0.0000257728)

        valorConvertidoBitcoin.innerHTML = `O resultado em Bitcoin é ${valorEmBitcoin.toFixed(2)}!`

        valorConvertido.innerHTML = `O resultado em Real é R$${valorEmReal.toFixed(2)}!`; //toFixed é para colocar um limite de casas decimais
    }
}

const ConverterEuro = () => {
    const valor = document.getElementById('valor').value;

    if (valor === '' || valor == 0) {
        alert('Insira um valor em Dólares!');
        valorConvertido.innerHTML = '';
        valorConvertidoBitcoin.innerHTML = '';
    } else {

        const valorEmDolarNumerico = parseFloat(valor); //passar para float

        const valorEmEuro = (valorEmDolarNumerico * 0.92); //fazer a conversão

        const valorConvertido = document.querySelector('#valorConvertido');
        const valorConvertidoBitcoin = document.querySelector('#valorEmBitcoin');

        const valorEmBitcoin = (valorEmDolarNumerico * 0.0000257728)

        valorConvertidoBitcoin.innerHTML = `O resultado em Bitcoin é ${valorEmBitcoin.toFixed(3)}!`

        valorConvertido.innerHTML = `O resultado em Euros é ${valorEmEuro.toFixed(3)}€!`; //toFixed é para colocar um limite de casas decimais
    }
}