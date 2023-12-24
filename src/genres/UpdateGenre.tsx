import { useParams } from "react-router-dom";

export default function UpdateGenre() {
  const { id } = useParams();

  return (
    <div>
      <h2>Update Genre</h2>
      <p>{id}</p>
    </div>
  );
}
