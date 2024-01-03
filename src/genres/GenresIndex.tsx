import EntityIndex from "../utils/EntityIndex";
import { urlGenres } from "../utils/endpoints";
import { genreDTO } from "./genres.model";

export default function GenresIndex() {
  return (
    <>
      <EntityIndex<genreDTO>
        url={urlGenres}
        creatingUrl="/genres/create"
        title="Genres"
        entityName="Genre"
      >
        {(genres, buttons) => (
          <>
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {genres?.map((genre) => (
                <tr key={genre.id}>
                  <td>{buttons(`/genres/edit/${genre.id}`, genre.id)}</td>
                  <td>{genre.name}</td>
                </tr>
              ))}
            </tbody>
          </>
        )}
      </EntityIndex>
    </>
  );
}
