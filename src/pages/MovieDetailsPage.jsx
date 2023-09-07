import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { getPopularMovies } from "../api/Imdb";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const MovieDetailsWrapper = styled.div`
  display: flex;
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

const Overview = styled.p``;

const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieData = await getPopularMovies(movieId);
        setMovie(movieData);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setMovie(null);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <Container>Loading...</Container>;
  }

  return (
    <Container>
      <MovieDetailsWrapper>
        {movie.poster_path && (
          <Poster>
            <img
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />
          </Poster>
        )}
        <MovieDetails>
          <MovieTitle>{movie.title}</MovieTitle>
          <ReleaseDate>Release Date: {movie.release_date}</ReleaseDate>
          <Overview>{movie.overview}</Overview>
          {/* Ajouter d'autres détails du film ici */}
        </MovieDetails>
      </MovieDetailsWrapper>
    </Container>
  );
};

export default MovieDetailsPage;
