import { useState, useEffect } from "react";

import MovieList from "../components/MovieList";
import axios from "axios";
//const VITE_REACT_APP_TMDB_API_KEY = "f714e336c263d8b94f45e1aa89d6e109";

export const getPopularMovies = async () => {
  try {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${
        import.meta.env.VITE_REACT_APP_TMDB_API_KEY
      }`
   );
   return response.data.results;
  } catch (error) {
    throw error;
  }
};
