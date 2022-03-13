/*
 * TODO:
 * - [x] Além de colocar a imagem do filme, também adicionar o nome por meio de outro input
 * - [] Guardar todos os filmes adicionados em uma lista/array e percorrer essa lista toda vez que quiser imprimir ou remover o filme
 * - [] Criar um botão para remover um filme na tela através do mesmo endereço;

 */

let moviesArray = [];
let moviesNames = [];

const addMovie = () => {

    let favoriteMovie = document.getElementById('movieAddress').value;
    let movieName = document.getElementById('movieName').value;

    if (moviesArray.includes(favoriteMovie)) {
        alert('This movie was already added.');
        document.getElementById('movieAddress').value = "";
    } else if (movieName == '' || favoriteMovie == '') {
        console.error('It is mandatory to fill in the image address and movies name fields!');
        alert('It is mandatory to fill in the image address and movies name fields');
    } else if (favoriteMovie.endsWith(".jpg") || favoriteMovie.endsWith(".jpeg")) { //validar se a string termina com .jpeg
        showMoviesOnScreen(favoriteMovie, movieName);
    } else {
        console.error('The movie address is invalid');
        alert('The movie address is invalid');
    }
    document.getElementById('movieAddress').value = '';
    document.getElementById('movieName').value = '';
}

const showMoviesOnScreen = (filme, movieName) => {
    moviesArray.push(filme);
    moviesNames.push(movieName);
    const image = document.createElement("img");
    const name = document.createElement('label');
    image.setAttribute('src', filme);
    image.setAttribute('id', moviesArray.length - 1);
    name.setAttribute('id', "name" + (moviesArray.length - 1));
    name.innerHTML = movieName;
    const movieContainer = document.getElementById('movieList');
    movieContainer.appendChild(image);
    movieContainer.appendChild(name);
}

const removeMovie = () => {

    if (moviesArray.length == 0) {
        alert('No one movie to remove!')
        return
    }
    let remove = prompt("What is the movie address to remove?");

    var indexToRemove = moviesArray.indexOf(remove);
    if (indexToRemove == -1) {
        alert("You have inserted an invalid movie address or that address doesn't exist.")
    } else {
        let movieAddressToRemove = document.getElementById(indexToRemove)
        movieAddressToRemove.remove();
        moviesArray[indexToRemove] = "";
        let name = document.getElementById('name' + indexToRemove)
        name.remove();
        moviesNames[indexToRemove] = "";
    }
}