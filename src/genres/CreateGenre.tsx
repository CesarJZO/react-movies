import axios from "axios";
import { useNavigate } from "react-router-dom";

import { genreCreationDTO } from "./genres.model";
import { urlGenres } from "../utils/endpoints";

import GenresForm from "./GenresForm";

export default function CreateGenre() {
  const navigate = useNavigate();

  async function create(genre: genreCreationDTO) {
    try {
      await axios.post(urlGenres, genre);
      navigate("/genres");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h2>Create Genre</h2>

      <GenresForm
        model={{ name: "" }}
        onSubmit={async (values) => await create(values)}
      />
    </>
  );
}
