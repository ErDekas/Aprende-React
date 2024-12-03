import React, { createContext, useState } from "react";

export const MovieSearchContext = createContext();

const MovieSearchProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const searchMovies = async (query) => {
    if (!query) return;
    setLoading(true);
    setError(null);

    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=1a3dcaad&s=${query}`
      );
      const data = await response.json();

      if (data.Response === "True") {
        setMovies(data.Search);
      } else {
        setError(data.Error);
      }
    } catch (err) {
      setError("Hubo un error al buscar las películas. Inténtalo nuevamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <MovieSearchContext.Provider value={{ movies, loading, error, searchMovies }}>
      {children}
    </MovieSearchContext.Provider>
  );
};

export default MovieSearchProvider;
