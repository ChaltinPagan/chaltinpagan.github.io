import React from "react";
import { Link } from "react-router-dom";
import movieAPI from "./movieAPI";

// The MovieList iterates over the array of movies and creates
// a link to each one's individual page.
const movies = movieAPI.getAll();

const MovieList = () => {
    return (
      <div>
        <h1>Movies</h1>
          <ol className="movie-list">
            {movies.map(movie => (
              <li key={movie.title}>
                <Link to={`/movies/${movie.id}`}>
                  {movie.title}
                </Link>
              </li>
            ))}
          </ol>
      </div>
    )
};

export default MovieList;