import { Link } from "react-router-dom";
import EntityIndex from "../utils/EntityIndex";
import { urlActors } from "../utils/endpoints";
import { actorDTO } from "./actors.model";

export default function ActorsIndex() {
  return (
    <>
      <Link to="/actors/create">Create Actor</Link>
      
      <EntityIndex<actorDTO>
        url={urlActors}
        creatingUrl="/actors/create"
        title="Actors"
        entityName="Actor"
      >
        {(actors, buttons) => (
          <>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Date of Birth</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {actors?.map((actor) => (
                <tr key={actor.id}>
                  <td>
                    {buttons(`/actors/update/${actor.id}`, actor.id)}
                  </td>
                  <td>
                    {actor.name}
                  </td>
                </tr>
              ))}
            </tbody>
          </>
        )}
      </EntityIndex>
    </>
  );
}
