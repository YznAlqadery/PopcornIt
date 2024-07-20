export function SelectedMovieDetails({
  movie,
  handleSelectedMovie,
  handleWatchedMovies,
  watchedMovies,
}) {
  const {
    Title,
    Released,
    Runtime,
    Genre,
    imdbRating,
    Plot,
    Director,
    Actors,
    Awards,
    Poster,
  } = movie;

  const isWatchedMovie = watchedMovies.find(
    (watchedMovie) => watchedMovie.imdbID === movie.imdbID
  );
  const watched = isWatchedMovie ? true : false;

  return (
    <div className="selected-movie">
      <button className="back-btn" onClick={() => handleSelectedMovie(null)}>
        Back
      </button>
      <div className="selected-movie-about">
        <img src={Poster} alt={Title} />
        <p className="selected-movie-title">{Title}</p>
        <p className="selected-movie-year">
          <span>
            <i className="fa-regular fa-calendar"></i>
          </span>
          {Released} - {Runtime}
        </p>
        <p className="selected-movie-genre">{Genre}</p>
        <p className="selected-movie-rating">
          <span>
            <i className="fa-regular fa-star"></i>
          </span>
          {imdbRating}
        </p>
      </div>
      <div>
        <p className="selected-movie-plot">{Plot}</p>
        <p className="selected-movie-director">
          <span>
            <i className="fa-regular fa-user"></i>
          </span>
          {Director}
        </p>
        <p className="selected-movie-actors">
          <span>
            <i className="fa-solid fa-user-group"></i>
          </span>
          {Actors}
        </p>
        <p className="selected-movie-awards">
          <span>
            <i className="fa-solid fa-trophy"></i>
          </span>
          {Awards}
        </p>
        <button
          disabled={watched}
          className="add-to-list"
          onClick={() => handleWatchedMovies(movie)}
        >
          {watched ? "You already watched this movie" : "Add to Watched"}
        </button>
      </div>
    </div>
  );
}
