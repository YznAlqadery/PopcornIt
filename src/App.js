import { useState } from "react";
import { useLocalStorageState } from "./hooks/useLocalStroage";
import { useMovies } from "./hooks/useMovies";
import { Navbar } from "./components/Navbar";
import { SearchQuery } from "./components/SearchQuery";
import { MovieBox } from "./components/MovieBox";
import { SelectedMovie } from "./components/SelectedMovie";
import { WatchedMovies } from "./components/WatchedMovies";

export default function App() {
  const [selectedMovie, setSelectedMovie] = useState(null);

  //Custom hook
  const [watchedMovies, setWatchedMovies] = useLocalStorageState([], "watched");
  const { movies, setQuery, query } = useMovies();

  function handleQueryChange(e) {
    setQuery(e.target.value);
  }

  function handleSelectedMovie(movieID) {
    setSelectedMovie(movieID);
  }
  function handleWatchedMovies(movie) {
    setWatchedMovies([...watchedMovies, movie]);
    setSelectedMovie(null);
  }
  function handleRemoveWatchedMovie(movieID) {
    setWatchedMovies((prevWatchedMovies) =>
      watchedMovies.filter((movie) => movie.imdbID !== movieID)
    );
  }

  return (
    <main>
      <Navbar>
        <SearchQuery query={query} handleQueryChange={handleQueryChange} />
      </Navbar>
      <div className="container">
        {watchedMovies.length > 0 && (
          <WatchedMovies
            watchedMovies={watchedMovies}
            handleRemoveWatchedMovie={handleRemoveWatchedMovie}
          />
        )}
        {selectedMovie ? (
          <SelectedMovie
            selectedID={selectedMovie}
            handleSelectedMovie={handleSelectedMovie}
            handleWatchedMovies={handleWatchedMovies}
            watchedMovies={watchedMovies}
          />
        ) : (
          <MovieBox movies={movies} handleSelectedMovie={handleSelectedMovie} />
        )}
      </div>
    </main>
  );
}
