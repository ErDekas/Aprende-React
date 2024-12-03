import React, { useState, useContext } from "react";
import { MovieSearchContext } from "./MovieSearchContext";

const SearchForm = () => {
  const [query, setQuery] = useState("");
  const { searchMovies } = useContext(MovieSearchContext);

  const handleSearch = (e) => {
    e.preventDefault();
    searchMovies(query);
  };

  return (
    <form onSubmit={handleSearch} style={{ marginBottom: "20px" }}>
      <input
        type="text"
        placeholder="Busca una película..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        style={{ padding: "10px", width: "300px", marginRight: "10px" }}
      />
      <button type="submit" style={{ padding: "10px 15px" }}>
        Buscar
      </button>
    </form>
  );
};

export default SearchForm;
