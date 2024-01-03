import { ReactElement, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import ErrorPrinter from "./ErrorPrinter";
import Pagination from "./Pagination";
import GenericList from "./GenericList";
import Button from "./Button";
import confirm from "./ConfirmModel";

export default function EntityIndex<T>({
  url,
  creatingUrl,
  children,
  title,
  entityName,
}: EntityIndexProps<T>) {
  const defaultRecordsPerPage = 10;

  const [entities, setEntities] = useState<T[]>([]);
  const [totalAmountOfRecords, setTotalAmountOfRecords] = useState(0);
  const [recordsPerPage, setRecordsPerPage] = useState(defaultRecordsPerPage);
  const [currentPage, setCurrentPage] = useState(1);

  const [errors, setErrors] = useState<string[]>([]);

  useEffect(() => {
    loadData();
  }, [currentPage, recordsPerPage]);

  function loadData() {
    axios
      .get(url, {
        params: {
          page: currentPage,
          recordsPerPage: recordsPerPage,
        },
      })
      .then((response: AxiosResponse<T[]>) => {
        const totalRecords = parseInt(
          response.headers["totalamountofrecords"],
          10
        );

        setTotalAmountOfRecords(Math.ceil(totalRecords / recordsPerPage));

        setEntities(response.data);
      });
  }

  const deleteEntity = async (id: number) => {
    try {
      await axios.delete(`${url}/${id}`);
      loadData();
    } catch (error) {
      setErrors((error as any).response.data);
    }
  };

  const buttons = (editingUrl: string, id: number) => (
    <>
      <Link to={editingUrl}>Edit</Link>
      <Button onClick={() => confirm(() => deleteEntity(id))}>Delete</Button>
    </>
  );

  return (
    <>
      <h2>{title}</h2>

      <Link to={creatingUrl}>Create {entityName}</Link>

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

      <GenericList list={entities}>
        <table>
          {children(entities!, buttons)}
        </table>
      </GenericList>
    </>
  );
}

interface EntityIndexProps<T> {
  url: string;
  creatingUrl: string;
  children: (
    entities: T[],
    buttons: (editingUrl: string, id: number) => ReactElement
  ) => ReactElement;
  title: string;
  entityName: string;
}
