import { useState, useEffect } from "react";
import styled from "styled-components"; // Importe le module styled-components
import { getPopularMovies } from "../api/Imdb";
import MovieModal from "./MovieModal";

const MovieItem = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Poster = styled.div`
  margin-right: 20px;
`;

const Grid = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
`;
const MovieWrapper = styled.div``;

const MovieTitle = styled.h2`
  margin-bottom: 10px;
`;

const MovieList = () => {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    selectedMovie(null);
  };

  return (
    <MovieWrapper>
      <h1 style={{ marginTop: "15vh" }}>Popular Movies</h1>
      <Grid>
        {movies.map((movie) => (
          <MovieItem key={movie.id}>
            {movie.poster_path && (
              <Poster>
                <img
                  src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
                  alt={movie.title}
                  onClick={() => openModal(movie)}
                />
              </Poster>
            )}
            <MovieTitle onClick={() => openModal(movie)}>
              {movie.title}
            </MovieTitle>
          </MovieItem>
        ))}
        {isModalOpen && (
          <MovieModal movieDetails={selectedMovie} onCloseModal={closeModal} />
        )}
      </Grid>
    </MovieWrapper>
  );
};
export default MovieList;
