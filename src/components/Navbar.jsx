/* eslint-disable react/prop-types */
import SearchIcon from "../assets/images/loupe-icon.png";
import Logo from "../assets/images/navbar-logo.png";
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
  max-width: 10%;
  height: auto;
  margin-bottom: 20px;
`;
const NavbarMenu = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
`;

const NavbarItem = styled.li`
  font-size: 16px;
  font-weight: bold;
  text-transform: uppercase;
`;

const NavbarLink = styled(Link)`
  text-decoration: none;
  color: white;

  &:hover {
    color: #ffcc00;
    font-weight: 700;
  }
`;

const Navbar = ({ onSearchSubmit, onSearchChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearchSubmit();
  };
  return (
    <StyledNav>
      <NavbarLogo>
        <LogoImage src={Logo} alt="lines-logo" />
        <SearchForm onSubmit={handleSubmit}>
          <SearchInput
            type="text"
            placeholder="Search movie"
            onChange={onSearchChange}
          />
          <SearchBtn alt="search-button" onClick={onSearchSubmit}>
            {" "}
            <Icon src={SearchIcon} alt="search-icon" />
            Search
          </SearchBtn>
        </SearchForm>
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

const SearchInput = styled.input`
  border: none;
  background-color: transp;
  color: #000000;
  width: 50%;
  height: 30%;

  font-size: 14px;
`;

const SearchBtn = styled.button`
  display: flex;
  margin: 6px;
  align-items: center;
`;
const Icon = styled.img`
  width: 15px;
  margin: 4px;
`;

const SearchForm = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 9px;
  border-radius: 20px;
  padding: 4px 10px;
  flex-grow: 1;
`;
