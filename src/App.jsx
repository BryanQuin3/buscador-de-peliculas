import { Movies } from "./components/Movies";
import { useMovies } from "./hooks/useMovies";
import { useSearch } from "./hooks/useSearch";
import { useState, useCallback } from "react";
import debounce from "just-debounce-it";
import "./App.css";

function App() {
  const [sort, setSort] = useState(false);
  const { search, updateSearch, error } = useSearch();
  const { movies, getMovies, loading } = useMovies({ search, sort });

  const debouncedGetMovies = useCallback(
    debounce((search) => {
      getMovies({ search });
    }, 300),
    [getMovies]
  );

  const handleSort = () => {
    if (!movies) return;
    setSort(!sort);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    getMovies({ search });
  };

  const handleChange = (event) => {
    const newSearch = event.target.value;
    if (newSearch === "") setSort(false);
    updateSearch(newSearch);
    debouncedGetMovies(newSearch);
  };

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form onSubmit={handleSubmit}>
          <input
            onChange={handleChange}
            value={search}
            className="search"
            placeholder="Avengers, Terminator, Star Wars..."
          />
          <input
            type="checkbox"
            name="check"
            onChange={handleSort}
            checked={sort}
          />
          <button type="submit">Buscar</button>
        </form>
        {error && <p className="error">{error}</p>}
      </header>
      <main>
        {loading ? <p>Cargando...</p> : <Movies movies={movies}></Movies>}
      </main>
    </div>
  );
}

export default App;
