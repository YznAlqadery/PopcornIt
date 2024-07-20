import { useState, useEffect } from "react";
import { SelectedMovieDetails } from "./SelectedMovieDetails";

export function SelectedMovie({
  selectedID,
  handleSelectedMovie,
  handleWatchedMovies,
  watchedMovies,
}) {
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const API_KEY = "33343e8a";

  useEffect(
    function () {
      async function fetchSelectedMovie() {
        setIsLoading(true);
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedID}`
        );
        const data = await response.json();
        setMovie(data);
      }
      fetchSelectedMovie();
      setIsLoading(false);
    },

    [selectedID]
  );

  useEffect(
    function () {
      if (!movie.Title) return;
      document.title = `${movie.Title} - PopcornIt`;

      //Cleanup function
      return function () {
        document.title = "PopcornIt";
      };
    },
    [movie.Title]
  );

  return (
    <section>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <SelectedMovieDetails
          movie={movie}
          handleSelectedMovie={handleSelectedMovie}
          handleWatchedMovies={handleWatchedMovies}
          watchedMovies={watchedMovies}
        />
      )}
    </section>
  );
}
