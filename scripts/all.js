document.addEventListener("DOMContentLoaded", function () {
    fetchTopTenMovies();
});
function fetchTopTenMovies() {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=25afacdd7d9acf12478bb0c74e5d129a&sort_by=popularity.desc')
        .then(response => response.json())
        .then(data => {
            console.log(data);
            displayMovies(data.results.slice(0, 10)); // Display top 10 movies
        })
        .catch(error => console.log(error));
}

function displayMovies(movies) {
    var movieContainer = document.getElementById("movie-container");

    movieContainer.innerHTML = '';

    movies.forEach(movie => {
        var movieCard = `
        <div class="flip flip-vertical">
            <div class="front">
                <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            </div>
            <div class="back">
                <h2>${movie.title}</h2>
                <p>Description: ${movie.overview}</p>
                <p>Vote avarage: ${movie.vote_average}</p>
            </div>
        </div>`;

        movieContainer.innerHTML += movieCard;
    })
}

