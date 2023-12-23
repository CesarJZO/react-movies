import MovieList from "./movies/MovieList";
import { movie } from "./movies/movies.model";

function App() {
  const featuredMovies: movie[] = [
    {
      id: 1,
      title: "The Godfather",
      poster: "https://i.ebayimg.com/images/g/oFkAAOSwoWRjZOHS/s-l1200.webp",
    },
    {
      id: 2,
      title: "The Godfather: Part II",
      poster: "https://i.ebayimg.com/images/g/oFkAAOSwoWRjZOHS/s-l1200.webp",
    },
    {
      id: 3,
      title: "The Godfather: Part III",
      poster: "https://i.ebayimg.com/images/g/oFkAAOSwoWRjZOHS/s-l1200.webp",
    },
  ];

  const toBeReleasedMovies: movie[] = [
    {
      id: 4,
      title: "The Matrix",
      poster: "https://i.ebayimg.com/images/g/oFkAAOSwoWRjZOHS/s-l1200.webp",
    },
    {
      id: 5,
      title: "The Matrix Reloaded",
      poster: "https://i.ebayimg.com/images/g/oFkAAOSwoWRjZOHS/s-l1200.webp",
    },
    {
      id: 6,
      title: "The Matrix Revolutions",
      poster: "https://i.ebayimg.com/images/g/oFkAAOSwoWRjZOHS/s-l1200.webp",
    },
  ];

  return (
    <>
      <main>
        <h1>Featured ⭐</h1>
        <MovieList movies={featuredMovies} />

        <h1>To be released 🍿</h1>
        <MovieList movies={toBeReleasedMovies} />
      </main>
    </>
  );
}

export default App;
