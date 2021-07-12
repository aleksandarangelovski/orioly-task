import { React, useContext } from "react";
import { Context } from "../Context/PostsContext";
import Card from "./Card";

function CardList(props) {
  const { movies } = useContext(Context);

  return (
    <div className="row">
      {movies.map((x) => (
        <Card key={x.id} id={x.id} title={x.title} img={x.image} description={x.description} />
      ))}
    </div>
  );
}

export default CardList;
