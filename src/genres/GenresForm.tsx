import { Link } from "react-router-dom";
import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import Button from "../utils/Button";
import FormGroupText from "../utils/FormGroupText";
import { genreCreationDTO } from "./genres.model";

export default function GenresForm({ model, onSubmit }: GenresFormProps) {
  return (
    <Formik
      initialValues={model}
      onSubmit={onSubmit}
      validationSchema={Yup.object({
        name: Yup.string().required("Required").firstLetterUppercase(),
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGroupText field="name" label="Name" />
          <Button type="submit" disabled={formikProps.isSubmitting}>
            Save
          </Button>
          <Link to="/genres">Cancel</Link>
        </Form>
      )}
    </Formik>
  );
}

interface GenresFormProps {
  model: genreCreationDTO;
  onSubmit: (
    values: genreCreationDTO,
    action: FormikHelpers<genreCreationDTO>
  ) => void;
}
