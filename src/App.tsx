import MovieList from "./movies/MovieList";
import { movie } from "./movies/movies.model";

function App() {
  const movies: movie[] = [
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

  return (
    <>
      <main>
        <h1>Movies</h1>
        <MovieList movies={movies} />
      </main>
    </>
  );
}

export default App;
