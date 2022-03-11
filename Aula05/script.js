/*
 * TODO:
 * - [] Além de colocar a imagem do filme, também adicionar o nome por meio de outro input
 * - [] Guardar todos os filmes adicionados em uma lista/array e percorrer essa lista toda vez que quiser imprimir ou remover o filme
 * - [] Criar um botão para remover um filme na tela através do mesmo endereço;

 */

let moviesArray = [];
let moviesNames = [];

const adicionarFilme = () => {

    let filmeFavorito = document.getElementById('filme').value;
    let nomeFilme = document.getElementById('nomeFilme').value;

    if (moviesArray.includes(filmeFavorito)) {
        alert('Este filme é repetido!');
        document.getElementById('filme').value = "";
    } else if (nomeFilme == '' || filmeFavorito == '') {
        console.error('Deve preencher o endereço da imagem e o seu nome!');
        alert('Deve preencher o endereço da imagem e o seu nome!');
    } else if (filmeFavorito.endsWith(".jpg") || filmeFavorito.endsWith(".jpeg")) { //validar se a string termina com .jpeg
        listarFilmesNaTela(filmeFavorito, nomeFilme);
    } else {
        console.error('Endereço de filme inválido!');
        alert('Endereço de filme inválido!');
    }
    document.getElementById('filme').value = '';
    document.getElementById('nomeFilme').value = '';
}

const listarFilmesNaTela = (filme, nomeFilme) => {
    moviesArray.push(filme);
    moviesNames.push(nomeFilme);
    const image = document.createElement("img");
    const name = document.createElement('label');
    image.setAttribute('src', filme);
    name.innerHTML = nomeFilme;
    const movieContainer = document.getElementById('listaFilmes');
    movieContainer.appendChild(image);
    movieContainer.appendChild(name);
}

const removerFilme = () => {
    let elementoListaFilmes = document.getElementById('listaFilmes');

    if (elementoListaFilmes.hasChildNodes()) {
        elementoListaFilmes.removeChild(elementoListaFilmes.lastElementChild);
        elementoListaFilmes.removeChild(elementoListaFilmes.lastElementChild); //que trolhice, melhora isso!
        moviesArray.pop();
        moviesNames.pop();
    } else {
        alert('Não existem mais filmes para apagar!')
    }
}