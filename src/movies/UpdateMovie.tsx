import MoviesForm from "./MoviesForm";

export default function UpdateMovie() {
  return (
    <>
      <h2>Update Movie</h2>

      <MoviesForm
        model={{
          title: "The Godfather",
          inTheaters: true,
          trailer: "https://www.youtube.com/embed/sY1S34973zA",
          releaseDate: new Date("2010-01-01T00:00:00"),
          posterURL:
            "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.imdb.com%2Ftitle%2Ftt0068646%2F&psig=AOvVaw0p8aQq5XkY8UH0XQ5KZjZ-&ust=1626250158656000&source=images&cd=vfe&ved=0CAoQjRxqFwoTCJjG5OvY3_ECFQAAAAAdAAAAABAD",
        }}
        onSubmit={(values) => console.log(values)}
        selectedGenres={[]}
        nonSelectedGenres={[]}
        selectedTheaters={[]}
      />
    </>
  );
}
