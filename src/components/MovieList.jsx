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
const PageChanger = styled.button`
  border-radius: 8px;
  background-color: green;
  &:hover {
    background-color: red;
    font-weight: 700px;
  }
`;
const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 5px;
  align-items: center;
`;
const MovieListTitle = styled.h1`
  margin-top: 17vh;
`;

const MovieList = ({ movies, currentPage, totalPages, setCurrentPage }) => {
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
      <MovieListTitle>Popular Movies</MovieListTitle>
      <Grid>
        {(movies || []).map((movie) => (
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
        <PageContainer>
          <PageChanger
            onClick={() => setCurrentPage(1)}
            disabled={currentPage === 1}
          >
            First
          </PageChanger>

          <PageChanger
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            Précédent
          </PageChanger>
          <span>
            Page {currentPage} / {totalPages}
          </span>
          <PageChanger
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            Suivante
          </PageChanger>
        </PageContainer>
      </Grid>
    </MovieWrapper>
  );
};
export default MovieList;
