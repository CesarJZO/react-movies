import MoviesForm from "./MoviesForm";

export default function CreateMovie() {
  return (
    <>
      <h2>Create Movie</h2>

      <MoviesForm
        model={{
          title: "",
          inTheaters: false,
          trailer: "",
        }}
        onSubmit={(values) => console.log(values)}
        selectedGenres={[]}
        nonSelectedGenres={[]}
        selectedTheaters={[]}
      />
    </>
  );
}
