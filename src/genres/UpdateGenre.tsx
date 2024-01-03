import { useNavigate, useParams } from "react-router-dom";
import GenresForm from "./GenresForm";
import { useEffect, useState } from "react";
import axios, { AxiosResponse } from "axios";
import { urlGenres } from "../utils/endpoints";
import { genreCreationDTO } from "./genres.model";
import Loading from "../utils/Loading";
import ErrorPrinter from "../utils/ErrorPrinter";

export default function UpdateGenre() {
  const { id } = useParams();

  const [genre, setGenre] = useState<genreCreationDTO>();
  const [errors, setErrors] = useState<string[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${urlGenres}/${id}`)
      .then((res: AxiosResponse<genreCreationDTO>) => setGenre(res.data));
  }, []);

  const edit = async (genre: genreCreationDTO) => {
    try {
      await axios.put(`${urlGenres}/${id}`, genre);
      navigate("/genres");
    } catch (error) {
      setErrors((error as any).response.data);
    }
  };

  return (
    <>
      <h2>Update Genre {id}</h2>

      <ErrorPrinter errors={errors} />

      {genre ? (
        <GenresForm
          model={genre}
          onSubmit={async (values) => await edit(values)}
        />
      ) : (
        <Loading />
      )}
    </>
  );
}
