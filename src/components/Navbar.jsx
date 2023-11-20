import SearchIcon from "../assets/images/loupe-icon.png";
import Logo from "../assets/images/lines_carre.png";
import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #333;
  color: white;
  height: 14vh;
`;

const NavbarLogo = styled.div`
  display: flex;
`;

const LogoImage = styled.img`
  max-width: 10%; /* La largeur maximale de l'image est de 100% du conteneur */
  height: auto; /* La hauteur est ajustée automatiquement pour conserver les proportions */
  margin-bottom: 20px; /* Espacement en bas de l'image */
`;
const NavbarMenu = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
`;

const NavbarItem = styled.li`
  /* Ajoutez des styles à vos éléments de liste ici */
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    color: #ffcc00;
  }
`;

const Navbar = () => {
  return (
    <StyledNav>
      <NavbarLogo>
        <LogoImage src={Logo} alt="lines-logo" />
        <SearchContainer>
          <SearchInput type="text" placeholder="Search movie" />
          <SearchIconImage src={SearchIcon} alt="search-icon" />
        </SearchContainer>
      </NavbarLogo>
      <NavbarMenu>
        <NavbarItem>
          <NavbarLink to="/">Home</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/movie/*">Watchlist</NavbarLink>
        </NavbarItem>
        <NavbarItem>
          <NavbarLink to="/movie">Login</NavbarLink>
        </NavbarItem>
      </NavbarMenu>
    </StyledNav>
  );
};

export default Navbar;

const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 9px;
  border-radius: 20px;
  padding: 4px 10px;
  flex-grow: 1;
`;

const SearchInput = styled.input`
  border: none;
  background-color: transp;
  color: white;
  width: 100%;

  font-size: 14px; /* Ajustez la taille de la police selon vos préférences */
`;

const SearchIconImage = styled.img`
  width: 20px;
  height: 20px;
  margin-left: 8px;
`;
