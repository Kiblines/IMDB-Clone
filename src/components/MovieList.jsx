import React, { useState, useEffect } from "react";
import styled from "styled-components"; // Importe le module styled-components
import { getPopularMovies } from "../api/Imdb";
import { Link } from "react-router-dom";

// Crée des composants Styled Components
const MovieItem = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Poster = styled.div`
  margin-right: 20px;
`;

const MovieDetails = styled.div``;

const MovieTitle = styled.h2`
  margin-bottom: 10px;
`;

const ReleaseDate = styled.p`
  margin-bottom: 5px;
  font-weight: bold;
`;

const Overview = styled.p`
  font-family: "Lucida Sans", "Lucida Sans Regular", "Lucida Grande",
    "Lucida Sans Unicode", Geneva, Verdana, sans-serif;
`;

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const moviesData = await getPopularMovies();
        setMovies(moviesData);
      } catch (error) {
        console.error("Error fetching data:", error);
        setMovies([]);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div>
      <h1>Popular Movies</h1>
      {movies.map((movie) => (
        <MovieItem key={movie.id}>
          {movie.poster_path && (
            <Poster>
              <Link to={`/movie/${movie.id}`}>
                {" "}
                {/* Lien vers la page de détails */}
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt={movie.title}
                />
              </Link>
            </Poster>
          )}
          <MovieDetails>
            <MovieTitle>{movie.title}</MovieTitle>
            <ReleaseDate>Release Date: {movie.release_date}</ReleaseDate>
            <Overview>{movie.overview}</Overview>
            <Overview>{movie.overview}</Overview>
            <Overview>{movie.title}</Overview>
          </MovieDetails>
        </MovieItem>
      ))}
    </div>
  );
};

export default MovieList;
