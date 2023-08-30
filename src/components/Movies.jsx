/* eslint-disable react/prop-types */
function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie" key={movie.id}>
          <header>
            <h2>{movie.title}</h2>
            <span>{movie.year}</span>
          </header>
          <figure className="img-container">
            <img src={movie.poster} alt={movie.title} />
          </figure>
        </li>
      ))}
    </ul>
  );
}

function NoMoviesFound() {
  return <p>No se encontraron películas para esta busqueda</p>;
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0;
  return hasMovies ? (
    <ListOfMovies movies={movies}></ListOfMovies>
  ) : (
    <NoMoviesFound></NoMoviesFound>
  );
}
