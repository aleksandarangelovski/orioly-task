import React, { createContext, useState } from "react";
import axios from "axios";
import { config } from "../Config/config";

export const Context = createContext({});

export const Provider = (props) => {
  const [movies, setMovies] = useState([]);

  function handleSearch(input) {
    axios
      .get(`https://imdb-api.com/en/API/SearchSeries/${config.imdbAPIkey}/${input}`)
      .then((res) => {
        setMovies(res.data.results);
      })
      .catch(() => console.log("error"));
  }

  const dataObj = {
    movies,
    setMovies,
    handleSearch,
  };

  return <Context.Provider value={dataObj}>{props.children}</Context.Provider>;
};
