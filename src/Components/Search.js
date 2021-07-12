import { useContext } from "react";
import { Context } from "../Context/PostsContext";

function Search(props) {
  const { handleSearch } = useContext(Context);

  return (
    <input
      type="search"
      placeholder="Search and press enter"
      className="form-control my-5"
      onKeyUp={(e) => {
        if (e.code === "Enter") {
          handleSearch(e.currentTarget.value);
        }
      }}
    />
  );
}

export default Search;
