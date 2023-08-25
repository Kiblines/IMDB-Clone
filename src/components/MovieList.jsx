import React, { useState, useEffect } from "react";
import { getPopularMovies } from "../api/Imdb";

const MovieList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getPopularMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <div>
              <img
                src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                alt={movie.title}
              />
            </div>
            <div>
              <h2>{movie.title}</h2>
              <p>Release Date: {movie.release_date}</p>
              <p>{movie.overview}</p>
            </div>
          </li>
        ))}
      </ul>
      <p>Ceci est la fin de movie list</p>
    </div>
  );
};

export default MovieList;
