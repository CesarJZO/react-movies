import { Link } from "react-router-dom";

import { Form, Formik } from "formik";
import * as Yup from "yup";

import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";

export default function CreateGenre() {
  return (
    <>
      <h2>Create Genre</h2>

      <Formik
        initialValues={{
          name: "",
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          name: Yup.string().required("Required").firstLetterUppercase(),
        })}
      >
        <Form>
          <FormGroupText field="name" label="Name" />
          <Button type="submit">Save</Button>
          <Link to="/genres">Cancel</Link>
        </Form>
      </Formik>
    </>
  );
}
