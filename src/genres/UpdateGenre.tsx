import UpdateEntity from "../utils/UpdateEntity";
import { urlGenres } from "../utils/endpoints";
import GenresForm from "./GenresForm";
import { genreCreationDTO, genreDTO } from "./genres.model";

export default function UpdateGenre() {
  return (
    <>
      <UpdateEntity<genreCreationDTO, genreDTO>
        url={urlGenres}
        indexUrl="/genres"
        entityName="Genre"
      >
        {(genre, edit) => (
          <GenresForm
            model={genre}
            onSubmit={async (values) => await edit(values)}
          />
        )}
      </UpdateEntity>
    </>
  );
}
