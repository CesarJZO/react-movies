import { Field, Form, Formik } from "formik";

import Button from "../utils/Button";
import { Link } from "react-router-dom";

export default function CreateGenre() {
  return (
    <>
      <h2>Create Genre</h2>

      <Formik
        initialValues={{
          name: "Your name",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        <Form>
          <fieldset>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="Your name" />
          </fieldset>
          <Button type="submit">Save</Button>
          <Link to="/genres">Cancel</Link>
        </Form>
      </Formik>
    </>
  );
}
