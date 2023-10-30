/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import styled from "styled-components";
import { getReleaseDates } from "../api/Imdb";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #6e6868;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  background-color: #000000;
  display: flex;
  justify-content: space-around;
  flex-direction: row-reverse;
  flex-wrap: wrap;
  padding: 20px;
  margin: 8vh;
  border-radius: 10px;
  font-size: 20px;
`;

const CloseModalButton = styled.button`
  float: right;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 20px;
`;

const MovieModal = ({ movieDetails, onCloseModal }) => {
  const [releaseDates, setReleaseDates] = useState([]);

  const genresList = {
    28: "Action",
    12: "Aventure",
    // autres genres...
  };

  useEffect(() => {
    const fetchReleaseDates = async () => {
      if (movieDetails && movieDetails.id) {
        try {
          const releaseDatesData = await getReleaseDates(movieDetails.id);
          setReleaseDates(releaseDatesData);
        } catch (error) {
          console.error(
            "Erreur lors de la récupération des dates de sortie",
            error
          );
        }
      }
    };

    fetchReleaseDates();
  }, [movieDetails]);
  const getGenreNames = (genreIds) => {
    return genreIds
      .map((id) => genresList[id])
      .filter((name) => name !== undefined);
  };

  if (!movieDetails) return null;
  const movieGenres = getGenreNames(movieDetails.genre_ids);

  return (
    <Backdrop onClick={onCloseModal}>
      <ModalBox onClick={(e) => e.stopPropagation()}>
        <CloseModalButton onClick={onCloseModal}>X</CloseModalButton>
        <h2>{movieDetails.title}</h2>
        <img
          src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`}
          alt={`Poster of ${movieDetails.title}`}
        />
        <p>{movieDetails.overview}</p>
        <p>{movieDetails.vote_average}</p>
        <p>Date de sortie : {movieDetails.release_date}</p>
        <p>Langue originale : {movieDetails.original_language}</p>
        <p>Titre original : {movieDetails.original_title}</p>
        {/* Afficher les genres ici */}
        {movieGenres.length > 0 && <p>Genres : {movieGenres.join(", ")}</p>}

        {movieDetails.adult ? <p>+18</p> : <p>-18</p>}

        {movieDetails.video ? (
          <p>🎥 Vidéo disponible</p>
        ) : (
          <p>Pas de vidéo disponible</p>
        )}
        <button>Like</button>
      </ModalBox>
    </Backdrop>
  );
};
export default MovieModal;
