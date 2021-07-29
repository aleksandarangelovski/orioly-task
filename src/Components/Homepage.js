import React, { useEffect } from "react";
import Search from "./Search";
import CardList from "./CardList";
import { useHistory } from "react-router-dom";

function Homepage(props) {
  let history = useHistory();

  useEffect(() => {
    let savedMovie = localStorage.getItem("favorite");

    if (savedMovie) {
      history.push(`/Movies/${savedMovie}`);
    }
  }, [history]);

  return (
    <div className="container text-center">
      <div className="row">
        <div className="col px-5">
          <h1 className="text-primary mt-3">IMDB Movies</h1>
          <Search />
        </div>
      </div>

      <div className="row">
        <div className="col">
          <CardList></CardList>
        </div>
      </div>
    </div>
  );
}

export default Homepage;
