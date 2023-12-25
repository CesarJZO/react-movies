import { Field, Form, Formik } from "formik";
import Button from "../utils/Button";

export default function MoviesIndex() {
  const initialValues: MoviesIndexProps = {
    title: "",
    genreId: 0,
    toBeReleased: false,
    inTheaters: false,
  };

  const genres = [
    { id: 1, name: "Drama" },
    { id: 2, name: "Action" },
    { id: 3, name: "Comedy" },
  ];

  return (
    <>
      <h2>Movies Search</h2>

      <Formik
        initialValues={initialValues}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {(formikProps) => (
          <Form>
            <fieldset>
              <legend>Movie data</legend>
              <div>
                <label htmlFor="title">Title</label>
                <input
                  id="title"
                  type="text"
                  placeholder="Movie title"
                  {...formikProps.getFieldProps("title")}
                />

                <select {...formikProps.getFieldProps("genreId")}>
                  <option value="0">Select a genre</option>
                  {genres.map((genre) => (
                    <option key={genre.id} value={genre.id}>
                      {genre.name}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <Field id="toBeReleased" name="toBeReleased" type="checkbox" />
                <label htmlFor="toBeReleased">To be released</label>
              </div>

              <div>
                <Field id="inTheaters" name="inTheaters" type="checkbox" />
                <label htmlFor="inTheaters">In theaters</label>
              </div>
            </fieldset>

            <Button onClick={() => formikProps.submitForm()}>Filter</Button>
            <Button onClick={() => formikProps.resetForm()}>Reset</Button>
          </Form>
        )}
      </Formik>
    </>
  );
}

interface MoviesIndexProps {
  title: string;
  genreId: number;
  toBeReleased: boolean;
  inTheaters: boolean;
}
