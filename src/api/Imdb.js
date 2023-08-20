import { useState, useEffect } from "react";
import axios from "axios";
import MovieList from "../components/MovieList";

function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    //Appel API IMDB & mise à jour du state 'movies'
    axios.get("https://www.omdbapi.com/?i=tt3896198&apikey=cbfe089e");
    //https://www.themoviedb.org/
  });
}
