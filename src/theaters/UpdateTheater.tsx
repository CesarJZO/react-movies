import TheatersForm from "./TheatersForm";

export default function UpdateTheater() {
  return (
    <>
      <h2>Update Theater</h2>

      <TheatersForm
        model={{ name: "Cinema City" }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
