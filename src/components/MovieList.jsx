/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components"; // Importe le module styled-components
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

const MovieResume = styled.p`
  font-weight: 400;
  font-size: 15px;
  color: white;
`;

const MovieContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const MovieTitle = styled.h2`
  margin-bottom: 10px;
`;

const MovieList = (props) => {
  const [selectedMovie, setSelectedMovie] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (movie) => {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMovie(null);
  };

  return (
    <MovieWrapper>
      <h1 style={{ marginTop: "15vh" }}>Popular Movies</h1>
      <Grid>
        {props.movies.map((movie) => (
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
            <MovieContent>
              <MovieTitle onClick={() => openModal(movie)}>
                {movie.title}
              </MovieTitle>
              <MovieResume>{movie.overview}</MovieResume>
              <MovieResume>{movie.vote_average}</MovieResume>

              {movie.genres &&
                movie.genres.map((genre) => (
                  <span key={genre.id}>{genre.name}</span> // Affiche le nom de chaque genre
                ))}
            </MovieContent>
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
