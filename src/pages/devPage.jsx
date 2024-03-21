import styled from "styled-components";

// Styled Components pour le conteneur principal
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: #121212; // Couleur de fond foncée pour correspondre au thème sombre
`;

// Pour les cartes de film
const MovieCard = styled.div`
  background: #1c1c1c;
  margin: 1rem;
  padding: 1rem;
  border-radius: 8px;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.5); // Ombre pour donner de la profondeur
`;

// Pour le titre et la note du film
const MovieHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid #333; // Ligne pour séparer le header du contenu
`;

const Title = styled.h2`
  color: #fff; // Titres blancs pour contraster avec l'arrière-plan foncé
`;

const Rating = styled.span`
  background: #f5c518; // Fond doré pour les évaluations, comme les étoiles IMDb
  padding: 4px 8px;
  border-radius: 4px;
  font-weight: bold;
`;

// Pour le contenu descriptif du film
const MovieBody = styled.div`
  margin-top: 0.5rem;
`;

const Description = styled.p`
  color: #aaa; // Texte légèrement plus clair pour une bonne lisibilité
`;

// Boutons d'action, par exemple pour ajouter à la liste de surveillance
const ActionButton = styled.button`
  background: #f5c518;
  border: none;
  border-radius: 4px;
  padding: 8px 16px;
  color: #000;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background: #e2b617; // Un peu plus sombre au survol pour l'interactivité
  }
`;

// Utilisation des composants dans votre application React
const DevPage = () => {
  return (
    <MainContainer>
      {/* Répéter MovieCard pour chaque film */}
      <MovieCard>
        <MovieHeader>
          <Title>The Pacific</Title>
          <Rating>8.2/10</Rating>
        </MovieHeader>
        <MovieBody>
          <Description>{/* Description du film */}</Description>
          <ActionButton>Add to watchlist</ActionButton>
          {/* D'autres boutons si nécessaire */}
        </MovieBody>
      </MovieCard>
      {/* Répétez pour les autres films */}
    </MainContainer>
  );
};

export default DevPage;
