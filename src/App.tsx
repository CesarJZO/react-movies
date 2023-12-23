import Movie from "./movies/Movie"
import { movie } from "./movies/movies.model"

function App() {
  const movie: movie = {
    id: 1,
    title: "The Godfather",
    poster: "https://i.ebayimg.com/images/g/oFkAAOSwoWRjZOHS/s-l1200.webp",
  }

  return (
    <>
      <Movie movie={movie} />
    </>
  )
}

export default App
