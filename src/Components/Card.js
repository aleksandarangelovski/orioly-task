import { React } from "react";
import { Link } from "react-router-dom";

function Card({ id, title, img, description }) {
  const myRegex = /\(\d{4}\)/;

  return (
    <div className="card col-md-3 mx-4 my-2" style={{ width: "15rem" }}>
      <Link to={`/Movies/${id}`}>
        <img
          className="card-img-top p-2"
          src={img}
          alt="alt"
          style={{ height: "70%" }}
        />
        <span style={{ fontSize: "14px" }}>{id}</span>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text" style={{ fontSize: "16px" }}>
            {myRegex.exec(description)[0]}
          </p>
        </div>
      </Link>

      <button
        type="button"
        onClick={() => {
          localStorage.setItem("favorite", id);
        }}
        className="btn-danger mb-3"
        data-toggle="tooltip"
        data-placement="top"
        title="Double-click to save"
      >
        Favorite
      </button>
    </div>
  );
}

export default Card;
