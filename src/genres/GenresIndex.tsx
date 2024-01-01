import axios, { AxiosResponse } from "axios";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { genreDTO } from "./genres.model";
import { urlGenres } from "../utils/endpoints";

export default function GenresIndex() {
  useEffect(() => {
    axios
      .get(urlGenres)
      .then((response: AxiosResponse<genreDTO>) => {
        console.log(response.data);
      });
  }, []);

  return (
    <>
      <h2>Genres</h2>

      <Link to="/genres/create">Create Genre</Link>
    </>
  );
}
