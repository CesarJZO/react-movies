import Movie from "./Movie";
import { movie } from "./movies.model";

import styles from "./movieList.module.css";

export default function MovieList({ movies }: MovieListProps) {
  return (
    <section className={styles.movieList}>
      {movies.map((movie) => (
        <Movie key={movie.id} movie={movie} />
      ))}
    </section>
  );
}

interface MovieListProps {
  movies: movie[];
}
