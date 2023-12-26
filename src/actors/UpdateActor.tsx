import ActorsForm from "./ActorsForm";

export default function UpdateActor() {
  const testImageLink =
    "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  return (
    <>
      <h2>Update Actor</h2>
      <ActorsForm
        model={{ name: "", dateOfBirth: undefined!, pictureURL: testImageLink }}
        onSubmit={(values) => console.log(values)}
      />
    </>
  );
}
