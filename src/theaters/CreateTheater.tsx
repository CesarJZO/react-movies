import TheatersForm from "./TheatersForm";

export default function CreateTheater() {
  return (
    <>
      <h2>Create Theater</h2>

      <TheatersForm
        model={{ name: "" }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
