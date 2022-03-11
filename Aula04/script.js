let moviesArray = []

const Submit = () => {
    var moviesElement = document.getElementById('movies-names');
    var moviesValue = document.getElementById('movies-names').value;

    if (moviesArray.includes(moviesValue)) {
        alert('Este filme é repetido!');
        document.getElementById('movies-names').value = "";
    } else if (moviesValue == 0 || moviesValue === '') {
        alert('Tem de inserir um filme válido!');
        document.getElementById('movies-names').value = "";
    } else {
        moviesArray.push(moviesValue);
        const image = document.createElement("img");
        image.setAttribute('src', moviesValue);
        image.classList.add('movies-img');
        const moviesContainer = document.getElementById("movies-container");
        moviesContainer.appendChild(image);
        document.getElementById('movies-names').value = "";
    }
}