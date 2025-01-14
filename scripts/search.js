document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("search-btn").addEventListener("click", function () {
        var title = document.getElementById("search").value;
        if (title.trim()) {
            fetchMovie(title);
            document.getElementById("details-page").style.display = 'block';
        } else {
            document.getElementById("details-page").style.display = 'none';
        }
    });
});

function fetchMovie(title) {
    fetch(`https://api.themoviedb.org/3/search/movie?api_key=25afacdd7d9acf12478bb0c74e5d129a&query=${title}`)
        .then(res => res.json())
        .then(data => {
            if (data.results && data.results.length > 0) {
                document.getElementById("title").textContent = data.results[0].title;
                document.getElementById('release_date').textContent = data.results[0].release_date;
                document.getElementById('overview').textContent = data.results[0].overview;
                document.getElementById('vote_average').textContent = data.results[0].vote_average;
                document.getElementById('original_language').textContent = data.results[0].original_language;
                document.getElementById('poster').src = `https://image.tmdb.org/t/p/w500${data.results[0].poster_path}`;
            } else {
                document.getElementById("title").textContent = (`No results found for ${title}`);
            }
        })
        .catch(err => console.log(err));
}

