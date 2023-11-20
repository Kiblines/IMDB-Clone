import Navbar from "../components/Navbar";
import styled from "styled-components";
import MovieList from "../components/MovieList";
import { useEffect, useState } from "react";
import { getPopularMovies } from "../api/Imdb";

// ta homepage c'est le grand manitou qui gère tes données

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
`;
const NavbarWrapper = styled.div`
  position: fixed;
  top: 0; /* Fixer la barre de navigation en haut de la page */
  width: 100%; /* Prend la largeur complète */
`;

export default function HomePage() {
  const [movies, setMovies] = useState([]);

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
    <HomeContainer>
      <NavbarWrapper>
        <Navbar></Navbar>
      </NavbarWrapper>
      <MovieList movies={movies} />
    </HomeContainer>
  );
}
