/* eslint-disable no-useless-catch */
import axios from "axios";

export const getPopularMovies = async (movieId = null) => {
  try {
    let url = "";
    if (movieId) {
      url = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${
        import.meta.env.VITE_REACT_APP_TMDB_API_KEY
      }`;
    } else {
      url = `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_REACT_APP_TMDB_API_KEY
      }`;
    }

    const response = await axios.get(url);

    if (movieId) {
      return response.data; // Pour un seul film, retournez les détails complets
    } else {
      return response.data.results; // Pour la liste de films populaires
    }
  } catch (error) {
    throw error;
  }
};

export const getReleaseDates = async (movieId) => {
  const url = `https://api.themoviedb.org/3/movie/${movieId}/release_dates?api_key=${
    import.meta.env.VITE_REACT_APP_TMDB_API_KEY
  }`;
  const response = await axios.get(url);
  return response.data.results; // Renvoie les dates de sortie par pays
};
