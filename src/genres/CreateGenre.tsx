import { useNavigate } from "react-router-dom";

export default function CreateGenre() {
  const navigate = useNavigate();
  return (
    <>
      <h2>Create Genre</h2>
      <button onClick={() => navigate("/genres")}>
        Save
      </button>
    </>
  );
}
