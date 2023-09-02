/* eslint-disable react/prop-types */
import { Skeleton } from "@mui/material";
function ListOfMovies({ movies }) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie" key={movie.id}>
          <figure className="img-container">
            {movie.poster === "N/A" ? (
              <Skeleton
                variant="rectangular"
                animation="wave"
                width={167}
                height={250}
                style={{ backgroundColor: "#212020" }}
              />
            ) : (
              <img className="poster" src={movie.poster} alt={movie.title} />
            )}
          </figure>
          <footer>
            <h2>{movie.title}</h2>
            <span>{movie.year}</span>
          </footer>
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
