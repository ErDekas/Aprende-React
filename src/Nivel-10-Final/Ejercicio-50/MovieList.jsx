import React, { useContext } from "react";
import { MovieSearchContext } from "./MovieSearchContext";
import MovieCard from "./MovieCard";

const MovieList = () => {
  const { movies, loading, error } = useContext(MovieSearchContext);

  if (loading) return <p>Cargando películas...</p>;
  if (error) return <p>Error: {error}</p>;
  if (movies.length === 0) return <p>No hay resultados.</p>;

  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "20px" }}>
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
};

export default MovieList;
