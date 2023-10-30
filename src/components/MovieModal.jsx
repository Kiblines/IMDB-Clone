import styled from "styled-components";
import PropTypes from "prop-types";

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: blue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalBox = styled.div`
  background-color: grey;
  padding: 20px;
  border-radius: 20px;
`;

const CloseModalButton = styled.button`
  float: right;
  border: none;
  background: none;
  cursor: pointer;
  font-size: 20px;
`;

const MovieModal = ({ movieDetails, onCloseModal }) => {
  if (!movieDetails) return null;
  MovieModal.propTypes = {
    movieDetails: PropTypes.shape({
      title: PropTypes.string,
      poster_path: PropTypes.string,
      overview: PropTypes.string,
    }),
    onCloseModal: PropTypes.func,
  };

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
        <button>Like</button>
      </ModalBox>
    </Backdrop>
  );
};
export default MovieModal;
