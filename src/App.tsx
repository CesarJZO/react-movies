import { useEffect, useState } from "react";
import MovieList from "./movies/MovieList";
import { landingPageDTO } from "./movies/movies.model";

function App() {
  const [movies, setMovies] = useState<landingPageDTO>({
    inTheaters: undefined,
    upcomingReleases: undefined,
  });

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
      <main>
        <h1>In theaters</h1>
        <MovieList movies={movies.inTheaters} />

        <h1>Upcoming releases</h1>
        <MovieList movies={movies.upcomingReleases} />
      </main>
    </>
  );
}

export default App;
