import Navbar from "../components/Navbar";
import styled from "styled-components";
import MovieList from "../components/MovieList";
import { useEffect, useState } from "react";
import { getPopularMovies, getSearchMovies } from "../api/Imdb";

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
  const [searchMovie, setSearchMovie] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const handleSearchSubmit = async () => {
    try {
      const searchData = await getSearchMovies(searchMovie);
      setSearchResults(searchData);
      console.log(searchData);
    } catch (error) {
      console.error("Error fetching search movie :", error);
      setSearchResults([]);
    }
  };

  const handleSortByRating = (order) => {
    const sorted = [...movies].sort((a, b) =>
      order === "desc"
        ? b.vote_average - a.vote_average
        : a.vote_average - b.vote_average
    );
    setMovies(sorted);
  };

  const handleSortByReleaseDate = (order) => {
    const sorted = [...movies].sort((a, b) => {
      const dateA = new Date(a.release_date);
      const dateB = new Date(b.release_date);
      return order === "desc" ? dateB - dateA : dateA - dateB;
    });
    setMovies(sorted);
  };

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const data = await getPopularMovies(currentPage);
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMovies();
  }, [currentPage]);

  return (
    <HomeContainer>
      <NavbarWrapper>
        <Navbar
          onSearchChange={(e) => setSearchMovie(e.target.value)}
          onSearchSubmit={handleSearchSubmit}
        ></Navbar>
      </NavbarWrapper>
      <MovieList
        movies={searchResults.length > 0 ? searchResults : movies}
        searchActive={searchResults.length > 0}
        currentPage={currentPage}
        totalPages={totalPages}
        setCurrentPage={setCurrentPage}
        handleSortByRating={handleSortByRating}
        handleSortByReleaseDate={handleSortByReleaseDate}
      />
    </HomeContainer>
  );
}
