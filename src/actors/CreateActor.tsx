import ActorsForm from "./ActorsForm";

export default function CreateActor() {
  return (
    <>
      <h2>Create Actor</h2>

      <ActorsForm
        model={{ name: "", dateOfBirth: undefined! }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
