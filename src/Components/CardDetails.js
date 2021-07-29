import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { config } from "../Config/config";

function CardDetails(props) {
  const [movieDetails, setMovieDetails] = useState({});
  const [detailsLoaded, setDetailsLoaded] = useState(false);

  useEffect(() => {
    axios
      .get(
        `https://imdb-api.com/en/API/Title/${config.imdbAPIkey}/${props.match.params.id}/FullActor,Ratings`
      )
      .then((res) => {
        setMovieDetails(res.data);
        setDetailsLoaded(true);
      })
      .catch(() => console.log("error"));
  }, [props.match.params.id]);

  if (!detailsLoaded) {
    return null;
  }

  return (
    <div className="container">
      <Link to="/">
        <h1
          onClick={() => {
            localStorage.removeItem("favorite");
          }}
          className="text-primary text-center mt-3"
        >
          Back to search results
        </h1>
      </Link>
      <div className="row mt-5">
        <div className="col mt-5">
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-4">
                <img src={movieDetails.image} className="card-img" alt="..." />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h2 className="card-title bg-dark text-light p-2 mb-4">
                    {movieDetails.title}
                  </h2>

                  <span
                    className="text-secondary"
                    style={{ textDecoration: "underline" }}
                  >
                    Main actors:
                  </span>
                  <p className="card-text text-secondary">
                    {movieDetails.stars}
                  </p>

                  <p
                    style={{ textDecoration: "underline" }}
                    className="card-text text-info mb-3"
                  >
                    Ratings:
                  </p>

                  <p className="text-info">IMDB: {movieDetails.ratings.imDb}</p>
                  <p className="text-info">
                    Metacritic: {movieDetails.ratings.metacritic}
                  </p>
                  <p className="text-info">
                    RottenTomatoes: {movieDetails.ratings.rottenTomatoes}
                  </p>
                  <p className="text-info">
                    TheMovieDb: {movieDetails.ratings.theMovieDb}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
