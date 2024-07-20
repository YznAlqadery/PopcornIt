import { useEffect, useState } from "react";
export function useMovies() {
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState("");
  const API_KEY = "33343e8a";
  useEffect(
    function () {
      async function fetchMovies() {
        const response = await fetch(
          `http://www.omdbapi.com/?apikey=${API_KEY}&s=${query}`
        );
        const data = await response.json();

        setMovies(data.Search);
      }
      fetchMovies();
    },
    [query]
  );
  return { movies, setQuery, query };
}
