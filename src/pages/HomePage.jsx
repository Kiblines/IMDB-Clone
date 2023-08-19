import React from "react";

import Navbar from "../components/Navbar";
import styled from "styled-components";

const HomeContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export default function HomePage() {
  return (
    <HomeContainer>
      <Navbar />
      {/* Autres contenus de la page */}
    </HomeContainer>
  );
}
