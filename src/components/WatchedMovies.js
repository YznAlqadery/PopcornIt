import { useState } from "react";
import { Movie } from "./Movie";

export function WatchedMovies({ watchedMovies, handleRemoveWatchedMovie }) {
  const [isOpened, setIsOpened] = useState(false);

  const className = "watched-movie";
  return (
    <div className="watched-movies" style={isOpened ? { height: "60vh" } : {}}>
      <h2>Watched Movies ({watchedMovies.length})</h2>
      <button
        className="watched-movies-btn"
        onClick={() => setIsOpened(!isOpened)}
      >
        {isOpened ? (
          <span>
            <i className="fa-solid fa-chevron-up"></i>
          </span>
        ) : (
          <span>
            <i className="fa-solid fa-chevron-down"></i>
          </span>
        )}
      </button>
      <div
        className={
          isOpened ? "watched-movies-list" : "watched-movies-list hidden"
        }
      >
        {watchedMovies.map((movie) => (
          <Movie
            key={movie.imdbID}
            movie={movie}
            className={className}
            handleRemoveWatchedMovie={handleRemoveWatchedMovie}
          />
        ))}
      </div>
    </div>
  );
}
