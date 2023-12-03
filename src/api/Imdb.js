import axios from "axios";

// Assure-toi que ta clé API est bien stockée dans ton fichier .env
// et que tu l'appelles correctement ici
const API_KEY = import.meta.env.VITE_REACT_APP_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export const getPopularMovies = async (page = 1, movieId = null) => {
  try {
    let url = `${BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`;
    if (movieId) {
      // Si un ID de film est fourni, on récupère les détails de ce film
      url = `${BASE_URL}/movie/${movieId}?api_key=${API_KEY}`;
    }

    const response = await axios.get(url);

    if (movieId) {
      // Pour un seul film, retourne les détails complets
      return response.data;
    } else {
      // Pour la liste de films populaires, inclut les informations de pagination
      return {
        results: response.data.results,
        page: response.data.page,
        total_pages: response.data.total_pages,
        total_results: response.data.total_results,
      };
    }
  } catch (error) {
    console.error("Error fetching movies:", error);
    throw error;
  }
};

export const getReleaseDates = async (movieId) => {
  const url = `${BASE_URL}/movie/${movieId}/release_dates?api_key=${API_KEY}`;
  const response = await axios.get(url);
  return response.data.results;
};

export const getSearchMovies = async (query) => {
  const url = `${BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(
    query
  )}`;
  const response = await axios.get(url);
  return response.data.results;
};
