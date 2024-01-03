import axios from "axios";
import ActorsForm from "./ActorsForm";
import { actorCreationDTO } from "./actors.model";
import { urlActors } from "../utils/endpoints";
import { useNavigate } from "react-router-dom";
import ErrorPrinter from "../utils/ErrorPrinter";
import { useState } from "react";

export default function CreateActor() {
  const navigate = useNavigate();

  const [errors, setErrors] = useState<string[]>([]);

  async function create(actor: actorCreationDTO) {
    try {
      await axios.post(urlActors, actor);
      navigate("/actors");
    } catch (error) {
      setErrors((error as any).response.data);
    }
  }

  return (
    <>
      <h2>Create Actor</h2>

      <ErrorPrinter errors={errors} />

      <ActorsForm
        model={{ name: "", dateOfBirth: undefined! }}
        onSubmit={async (values) => await create(values)}
      />
    </>
  );
}
