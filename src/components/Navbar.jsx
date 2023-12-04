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
  padding-right: 3em;
`;

const NavbarLogo = styled.div`
  display: flex;
`;

const LogoImage = styled.img`
  width: 8%;
  height: 5%;
  margin-bottom: 1%;
  margin-left: 5%;
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

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <StyledNav>
      <NavbarLogo>
        <LogoImage
          onClick={scrollToTop}
          href="#top"
          src={Logo}
          alt="lines-logo"
        />
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
  color: white;
  width: 50%;
  height: 30%;
  font-size: 14px;
  padding-left: 14px;
`;

const SearchBtn = styled.button`
  background-color: red;
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
