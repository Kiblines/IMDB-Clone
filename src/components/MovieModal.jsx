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

  if (!movieDetails) return null;

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
        <button>Like</button>
      </ModalBox>
    </Backdrop>
  );
};
export default MovieModal;
