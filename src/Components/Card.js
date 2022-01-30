import { React, useState } from "react";
import { Link } from "react-router-dom";

function Card({ id, title, img, description }) {
  const [clicked, setClicked] = useState(false);

  const getMovieYear = /\(\d{4}\)/;

  return (
    <div className="card col-md-3 mx-4 my-2">
      <Link to={`/Movies/${id}`}>
        <img className="card-img-top" src={img} alt="alt" />
        <span style={{ fontSize: "14px" }}>{id}</span>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{getMovieYear.exec(description)[0]}</p>
        </div>
      </Link>

      <button
        type="button"
        onClick={() => {
          localStorage.setItem("favorite", id);
          setClicked((prev) => !prev);
        }}
        data-toggle="tooltip"
        data-placement="top"
        title="click to save"
      >
        {clicked ? "Saved" : "Favorite"}
      </button>
    </div>
  );
}

export default Card;
