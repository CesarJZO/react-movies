import { movie } from "./movies.model";
import styles from "./Movie.module.css";

export default function Movie({ movie: { id, title, poster } }: MovieProps) {
  const link = `/movie/${id}`;

  return (
    <div className={styles.movie}>
      <a href={link}>
        <img className={styles.poster} src={poster} alt={`${title}'s poster`} />
      </a>
      <p>
        <a href={link}>{title}</a>
      </p>
    </div>
  );
}

interface MovieProps {
  movie: movie;
}
