/*
 * TODO:
 * - [] Além de colocar a imagem do filme, também adicionar o nome por meio de outro input
 * - [] Guardar todos os filmes adicionados em uma lista/array e percorrer essa lista toda vez que quiser imprimir ou remover o filme
 */

const adicionarFilme = () => {

    let filmeFavorito = document.getElementById('filme').value;
    let nomeFilme = document.getElementById('nomeFilme').value;

    if (nomeFilme == '' || filmeFavorito == '') {
        console.error('Deve preencher o endereço da imagem e o seu nome!');
        alert('Deve preencher o endereço da imagem e o seu nome!');
        return
    }

    if (filmeFavorito.endsWith(".jpg") || filmeFavorito.endsWith(".jpeg")) { //validar se a string termina com .jpeg
        listarFilmesNaTela(filmeFavorito, nomeFilme);
    } else {
        console.error('Endereço de filme inválido!');
        alert('Endereço de filme inválido!');
    }
    document.getElementById('filme').value = '';
    document.getElementById('nomeFilme').value = '';
}


const listarFilmesNaTela = (filme, nomeFilme) => {
    let elementoFilmeFavorito = "<img src=" + filme + ">";
    let elementoNomeFilme = "<p>" + nomeFilme + "</p>"
    let elementoListaFilmes = document.getElementById('listaFilmes');

    elementoListaFilmes.innerHTML = elementoListaFilmes.innerHTML + elementoFilmeFavorito + elementoNomeFilme; //adicionar filmes

}

/* 
* TODO:
 * - [] Criar um botão para remover um filme na tela através do mesmo endereço;

*/

const removerFilme = () => {
    let elementoListaFilmes = document.getElementById('listaFilmes');
    elementoListaFilmes.removeChild(elementoListaFilmes.lastElementChild);
}