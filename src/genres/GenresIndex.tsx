import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { genreDTO } from "./genres.model";
import { urlGenres } from "../utils/endpoints";
import GenericList from "../utils/GenericList";
import Button from "../utils/Button";
import Pagination from "../utils/Pagination";
import ErrorPrinter from "../utils/ErrorPrinter";
import confirm from "../utils/ConfirmModel";

export default function GenresIndex() {
  const defaultRecordsPerPage = 10;

  const [genres, setGenres] = useState<genreDTO[]>([]);
  const [totalAmountOfRecords, setTotalAmountOfRecords] = useState(0);
  const [recordsPerPage, setRecordsPerPage] = useState(defaultRecordsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    loadData();
  }, [currentPage, recordsPerPage]);

  const deleteGenre = async (id: number) => {
    try {
      await axios.delete(`${urlGenres}/${id}`);
      loadData();
    } catch (error) {
      setErrors((error as any).response.data);
    }
  };

  function loadData() {
    axios
      .get(urlGenres, {
        params: {
          page: currentPage,
          recordsPerPage: recordsPerPage,
        },
      })
      .then((response: AxiosResponse<genreDTO[]>) => {
        const totalRecords = parseInt(
          response.headers["totalamountofrecords"],
          10
        );

        setTotalAmountOfRecords(Math.ceil(totalRecords / recordsPerPage));

        console.log(response.data);
        setGenres(response.data);
      });
  }

  return (
    <>
      <h2>Genres</h2>

      <Link to="/genres/create">Create Genre</Link>

      <select
        defaultValue={defaultRecordsPerPage}
        onChange={(e) => {
          setCurrentPage(1);
          setRecordsPerPage(parseInt(e.currentTarget.value, 10));
        }}
      >
        <option>1</option>
        <option>5</option>
        <option>10</option>
      </select>

      <ErrorPrinter errors={errors} />

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
                  <Link to={`/genres/update/${genre.id}`}>Edit</Link>
                  <Button onClick={() => confirm(() => deleteGenre(genre.id))}>
                    Delete
                  </Button>
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
