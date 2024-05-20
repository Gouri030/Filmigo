$(document).ready(function() {
    $('#movieForm').submit(function(event) {
        event.preventDefault();

        const title = $('#movieTitle').val();
        const description = $('#movieDescription').val();
        const image = $('#movieImage').val();
        const video = $('#movieVideo').val();

        const movie = {
            title: title,
            description: description,
            image: image,
            video: video
        };

        let movies = localStorage.getItem('movies');
        if (movies) {
            movies = JSON.parse(movies);
        } else {
            movies = [];
        }

        movies.push(movie);
        localStorage.setItem('movies', JSON.stringify(movies));

        alert('Movie added successfully!');
        $('#movieForm')[0].reset();

        // Add the new movie to the page
        addMovieToPage(movie);
    });

    function addMovieToPage(movie) {
        const movieCard = `
            <div class="col-md-3">
                <div class="card bg-dark text-white">
                    <img src="${movie.image}" class="card-img-top" alt="${movie.title}">
                    <div class="card-body">
                        <h5 class="card-title">${movie.title}</h5>
                        <p class="card-text">${movie.description}</p>
                        <a href="${movie.video}" class="btn btn-primary">Watch Now</a>
                    </div>
                </div>
            </div>
        `;
        $('#newMovies').append(movieCard);
    }

    // Load existing movies on page load
    const existingMovies = JSON.parse(localStorage.getItem('movies')) || [];
    existingMovies.forEach(movie => {
        addMovieToPage(movie);
    });
});
