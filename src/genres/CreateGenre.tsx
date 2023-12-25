import GenresForm from "./GenresForm";

export default function CreateGenre() {
  return (
    <>
      <h2>Create Genre</h2>

      <GenresForm
        model={{ name: "" }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 3000));
          console.log(values);
        }}
      />
    </>
  );
}
