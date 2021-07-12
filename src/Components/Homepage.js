import React from "react";
import Search from "./Search";
import CardList from "./CardList";

function Homepage(props) {
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
