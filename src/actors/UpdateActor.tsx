import UpdateEntity from "../utils/UpdateEntity";
import { urlActors } from "../utils/endpoints";
import { actorToFormData } from "../utils/formDataUtils";
import ActorsForm from "./ActorsForm";
import { actorCreationDTO, actorDTO } from "./actors.model";

export default function UpdateActor() {
  const transform = (actor: actorDTO): actorCreationDTO => {
    return {
      name: actor.name,
      pictureURL: actor.picture,
      biography: actor.biography,
      dateOfBirth: new Date(actor.dateOfBirth),
    };
  };

  return (
    <>
      <UpdateEntity<actorCreationDTO, actorDTO>
        url={urlActors}
        indexUrl="/actors"
        entityName="Actors"
        transform={transform}
        transformToFormData={actorToFormData}
      >
        {(entity, edit) => <ActorsForm model={entity} onSubmit={edit} />}
      </UpdateEntity>
    </>
  );
}
