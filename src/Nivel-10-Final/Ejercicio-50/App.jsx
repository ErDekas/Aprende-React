import React from "react";
import MovieSearchProvider from "./MovieSearchContext";
import SearchForm from "./SearchForm";
import MovieList from "./MovieList";

const App = () => {
  return (
    <MovieSearchProvider>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>🎥 Buscador de Películas</h1>
        <SearchForm />
        <MovieList />
      </div>
    </MovieSearchProvider>
  );
};

export default App;
