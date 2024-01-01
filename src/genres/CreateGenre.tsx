import axios, { Axios, AxiosError } from "axios";
import { useNavigate } from "react-router-dom";

import { genreCreationDTO } from "./genres.model";
import { urlGenres } from "../utils/endpoints";

import GenresForm from "./GenresForm";
import ErrorPrinter from "../utils/ErrorPrinter";
import { useState } from "react";

export default function CreateGenre() {
  const navigate = useNavigate();

  const [errors, setErrors] = useState<string[]>([]);

  async function create(genre: genreCreationDTO) {
    try {
      await axios.post(urlGenres, genre);
      navigate("/genres");
    } catch (error) {
      console.error(error);
      setErrors((error as any).response.data);
    }
  }

  return (
    <>
      <h2>Create Genre</h2>
      <ErrorPrinter errors={errors} />
      <GenresForm
        model={{ name: "" }}
        onSubmit={async (values) => await create(values)}
      />
    </>
  );
}
