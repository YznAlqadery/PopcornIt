import { Movie } from "./Movie";

export function MovieBox({ movies, handleSelectedMovie }) {
  if (!movies) {
    return <p>No movies fetched...</p>;
  }
  return (
    <section>
      <div className="movies">
        {movies.map(function (movie) {
          return (
            <Movie
              key={movie.imdbID}
              movie={movie}
              handleSelectedMovie={handleSelectedMovie}
            />
          );
        })}
      </div>
    </section>
  );
}
