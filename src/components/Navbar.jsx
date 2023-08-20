import React from "react";

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

const NavbarLink = styled.a`
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
      </NavbarLogo>
      <NavbarMenu>
        <NavbarItem>
          <NavbarLink href="/">Home</NavbarLink>
        </NavbarItem>
      </NavbarMenu>
    </StyledNav>
  );
};

export default Navbar;
