import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { genreDTO } from "./genres.model";
import { urlGenres } from "../utils/endpoints";
import GenericList from "../utils/GenericList";
import Button from "../utils/Button";

export default function GenresIndex() {
  const [genres, setGenres] = useState<genreDTO[]>([]);

  useEffect(() => {
    axios.get(urlGenres).then((response: AxiosResponse<genreDTO[]>) => {
      console.log(response.data);
      setGenres(response.data);
    });
  }, []);

  return (
    <>
      <h2>Genres</h2>

      <Link to="/genres/create">Create Genre</Link>

      <GenericList list={genres}>
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {genres?.map((genre) => (
              <tr key={genre.id}>
                <td>
                  <Link to={`/genres/edit/${genre.id}`}>Edit</Link>
                  <Button>Delete</Button>
                </td>
                <td>{genre.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </GenericList>
    </>
  );
}
