import { Typeahead } from "react-bootstrap-typeahead";
import { actorMovieDTO } from "./actors.model";
import { ReactElement } from "react";

export default function TypeAheadActors({
  actors,
  onAdd,
  onRemove,
  uiList,
}: TypeAheadActorsProps) {
  return (
    <>
      <label>Actors</label>
      <Typeahead
        id="typeahead"
        onChange={(acts) => {
          const act = acts[0] as actorMovieDTO;
          if (actors.some((a) => a.id === act.id)) {
            onAdd([...actors, act]);
          }
          console.log(acts);
        }}
        options={actors}
        labelKey={(actor: any) => actor.name}
        filterBy={["name"]}
        placeholder="Choose an actor..."
        minLength={2}
        flip={true}
        selected={[]}
        renderMenuItemChildren={(actor: any) => (
          <>
            <img
              src={actor.picture}
              alt={`${actor.name}'s picture`}
              style={{ width: "50px" }}
            />
            <span>{actor.name}</span>
          </>
        )}
      />

      <ul>
        {actors.map((actor) => (
          <li key={actor.id}>
            {uiList(actor)}
            <button onClick={() => onRemove!(actor)}>X</button>
          </li>
        ))}
      </ul>
    </>
  );
}

export interface TypeAheadActorsProps {
  actors: actorMovieDTO[];
  onAdd: (actors: actorMovieDTO[]) => void;
  onRemove?: (actor: actorMovieDTO) => void;
  uiList: (actor: actorMovieDTO) => ReactElement;
}
