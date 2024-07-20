export function Movie({
  movie,
  handleSelectedMovie,
  className = "movie",
  handleRemoveWatchedMovie,
}) {
  return (
    <div
      className={className}
      onClick={() => handleSelectedMovie(movie.imdbID)}
    >
      <img
        className={`${className}-img`}
        src={movie.Poster}
        alt={movie.Title}
      />
      <div className={`${className}-details`}>
        <h2 className={`${className}-title`}>{movie.Title}</h2>
        <p className={`${className}-year`}>
          <span>
            <i className="fa-regular fa-calendar"></i>
          </span>
          {movie.Year}
        </p>
        {className === "watched-movie" && (
          <button
            className="remove-from-list"
            onClick={(e) => {
              e.stopPropagation();
              handleRemoveWatchedMovie(movie.imdbID);
            }}
          >
            <i className="fa-solid fa-trash"></i>
          </button>
        )}
      </div>
    </div>
  );
}
