import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/images/lines_carre.png";
import styled from "styled-components";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #333;
  color: white;
`;

const NavbarLogo = styled.div`
  height: 50px;
`;

const NavbarMenu = styled.ul`
  display: flex;
  gap: 1rem;
  list-style: none;
`;

const Navbar = () => {
  return (
    <StyledNav>
      <NavbarLogo>
        <img src={Logo} alt="lines-logo" />
      </NavbarLogo>
      <NavbarMenu>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/watchlist">Watchlist</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </NavbarMenu>
    </StyledNav>
  );
};

export default Navbar;
