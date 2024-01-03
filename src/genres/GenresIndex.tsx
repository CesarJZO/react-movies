import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { genreDTO } from "./genres.model";
import { urlGenres } from "../utils/endpoints";
import GenericList from "../utils/GenericList";
import Button from "../utils/Button";
import Pagination from "../utils/Pagination";

export default function GenresIndex() {
  const [genres, setGenres] = useState<genreDTO[]>([]);
  const [totalAmountOfRecords, setTotalAmountOfRecords] = useState(0);
  const [recordsPerPage, setRecordsPerPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    axios.get(urlGenres, {
      params: {
        page: currentPage,
        recordsPerPage: recordsPerPage,
      },
    }).then((response: AxiosResponse<genreDTO[]>) => {
      const totalRecords = parseInt(
        response.headers["totalamountofrecords"],
        10
      );

      setTotalAmountOfRecords(Math.ceil(totalRecords / recordsPerPage));

      console.log(response.data);
      setGenres(response.data);
    });
  }, [currentPage, recordsPerPage]);

  return (
    <>
      <h2>Genres</h2>

      <Link to="/genres/create">Create Genre</Link>

      <Pagination
        currentPage={currentPage}
        totalPages={totalAmountOfRecords}
        onChange={(newPage) => setCurrentPage(newPage)}
      />

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
