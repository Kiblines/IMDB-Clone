import { useState, useEffect } from "react";

import MovieList from "../components/MovieList";
import axios from "axios";
//const VITE_REACT_APP_TMDB_API_KEY = "f714e336c263d8b94f45e1aa89d6e109";

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
