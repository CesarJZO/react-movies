import ActorsForm from "./ActorsForm";

export default function UpdateActor() {
  return (
    <>
      <h2>Update Actor</h2>

      <ActorsForm
        model={{ name: "", dateOfBirth: undefined! }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
