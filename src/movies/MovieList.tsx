import Movie from "./Movie";
import { movie } from "./movies.model";
import Loading from "../utils/Loading";

import styles from "./movieList.module.css";

export default function MovieList({ movies }: MovieListProps) {
  if (!movies) {
    return <p>No movies found!</p>;
  } else if (movies.length === 0) {
    return <Loading />;
  } else {
    return (
      <section className={styles.movieList}>
        {movies.map((movie) => (
          <Movie key={movie.id} movie={movie} />
        ))}
      </section>
    );
  }
}

interface MovieListProps {
  movies?: movie[];
}
