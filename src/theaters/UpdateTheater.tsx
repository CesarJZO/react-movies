import TheatersForm from "./TheatersForm";

export default function UpdateTheater() {
  return (
    <>
      <h2>Update Theater</h2>

      <TheatersForm
        model={{ name: "Cinema City", latitude: 51.678418, longitude: 7.809007 }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
