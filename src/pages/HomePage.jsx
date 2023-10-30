import Navbar from "../components/Navbar";
import styled from "styled-components";
import MovieList from "../components/MovieList";

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
  return (
    <HomeContainer>
      <NavbarWrapper>
        <Navbar></Navbar>
      </NavbarWrapper>
      <MovieList />
    </HomeContainer>
  );
}
