import { Link } from "react-router-dom";

export default function GenresIndex() {
  return (
    <>
      <h2>Genres</h2>
      <Link to="/genres/create">Create Genre</Link>
    </>
  );
}
