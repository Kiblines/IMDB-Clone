/* eslint-disable react/prop-types */
import { useState } from "react";
import styled from "styled-components"; // Importe le module styled-components
import MovieModal from "./MovieModal";
import SearchIcon from "../assets/images/loupe-icon.png";

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

const SelectContainer = styled.div`
  display: inline-block;
  width: 200px;
`;

const StyledSelect = styled.select`
  display: block;
  width: 100%;
  height: 40px;
  padding: 5px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: white;
  color: #333;
  appearance: none;
  background-image: url("${SearchIcon}");
  background-size: 1em;
  background-repeat: no-repeat;
  background-position: right 10px center;
  cursor: pointer;

  &:hover {
    border-color: #888;
  }

  &:focus {
    outline: none;
    border-color: #555;
  }
`;

const StyledOption = styled.option`
  padding: 10px;
  background: white;
  color: #333;

  &:hover,
  &:focus {
    background-color: #f3f3f3;
  }
`;
const MovieList = ({
  movies,
  currentPage,
  totalPages,
  setCurrentPage,
  handleSortByReleaseDate,
  handleSortByRating,
}) => {
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

  const handleSortChange = (value) => {
    if (value.startsWith("rating")) {
      handleSortByRating(value.split("-")[1]);
    } else if (value.startsWith("date")) {
      handleSortByReleaseDate(value.split("-")[1]);
    }
  };
  return (
    <MovieWrapper>
      <MovieListTitle>Popular Movies</MovieListTitle>
      <SelectContainer>
        <StyledSelect onChange={(e) => handleSortChange(e.target.value)}>
          <StyledOption value="rating-desc">Highest Rating</StyledOption>
          <StyledOption value="rating-asc">Lowest Rating</StyledOption>
          <StyledOption value="date-desc">Newest</StyledOption>
          <StyledOption value="date-asc">Oldest</StyledOption>
        </StyledSelect>
      </SelectContainer>
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
            Previous
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
            Next
          </PageChanger>
        </PageContainer>
      </Grid>
    </MovieWrapper>
  );
};
export default MovieList;
