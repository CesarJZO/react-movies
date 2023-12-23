import Movie from "./Movie";
import { movie } from "./movies.model";

import styles from "./movieList.module.css";
import GenericList from "../utils/GenericList";

export default function MovieList({ movies }: MovieListProps) {
  return (
    <GenericList list={movies!}>
      <section className={styles.movieList}>
        {movies?.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </section>
    </GenericList>
  );
}

interface MovieListProps {
  movies?: movie[];
}
