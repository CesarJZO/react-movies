import { useParams } from "react-router-dom";
import GenresForm from "./GenresForm";

export default function UpdateGenre() {
  const { id } = useParams();

  return (
    <>
      <h2>Update Genre {id}</h2>
      <GenresForm
        model={{ name: "Drama" }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 3000));
          console.log(values);
        }}
      />
    </>
  );
}
