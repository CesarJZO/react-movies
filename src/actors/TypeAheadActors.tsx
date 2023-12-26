import { Typeahead } from "react-bootstrap-typeahead";
import { actorMovieDTO } from "./actors.model";

export default function TypeAheadActors({ actors }: TypeAheadActorsProps) {
  return (
    <>
      <label>Actors</label>
      <Typeahead
        id="typeahead"
        onChange={(actor) => console.log(actor)}
        options={actors}
        labelKey={(actor: any) => actor.name}
        filterBy={['name']}
        placeholder="Choose an actor..."
        minLength={2}
        flip={true}
      />
    </>
  );
}

export interface TypeAheadActorsProps {
  actors: actorMovieDTO[];
}
