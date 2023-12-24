import { useEffect, useState } from "react";

import { landingPageDTO } from "./movies/movies.model";
import MovieList from "./movies/MovieList";

export default function LandingPage() {
  const [movies, setMovies] = useState<landingPageDTO>({});

  useEffect(() => {
    const falseTimer = setTimeout(() => {
      setMovies({
        inTheaters: [
          {
            id: 1,
            title: "The Godfather",
            poster:
              "https://i.ebayimg.com/images/g/oFkAAOSwoWRjZOHS/s-l1200.webp",
          },
          {
            id: 2,
            title: "The Godfather: Part II",
            poster:
              "https://i.ebayimg.com/images/g/oFkAAOSwoWRjZOHS/s-l1200.webp",
          },
          {
            id: 3,
            title: "The Godfather: Part III",
            poster:
              "https://i.ebayimg.com/images/g/oFkAAOSwoWRjZOHS/s-l1200.webp",
          },
        ],
        upcomingReleases: [
          {
            id: 4,
            title: "The Matrix",
            poster:
              "https://i.ebayimg.com/images/g/oFkAAOSwoWRjZOHS/s-l1200.webp",
          },
        ],
      });

      return () => clearTimeout(falseTimer);
    }, 1000);
  }, []);

  return (
    <>
      <h2>In Theaters</h2>
      <MovieList movies={movies.inTheaters} />

      <h2>Upcoming Releases</h2>
      <MovieList movies={movies.upcomingReleases} />
    </>
  );
}
