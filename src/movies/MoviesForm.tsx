import { Form, Formik, FormikHelpers } from "formik";
import { movieCreationDTO } from "./movies.model";
import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText";
import FormGroupCheckBox from "../utils/FormGroupCheckBox";
import FormGroupDate from "../utils/FormGroupDate";
import FormGroupImage from "../utils/FormGroupImage";
import Button from "../utils/Button";
import { Link } from "react-router-dom";

export default function MoviesForm({ model, onSubmit }: MoviesFormProps) {
  const rule = Yup.string()
    .required("This field is required")
    .firstLetterUppercase();
  return (
    <Formik
      initialValues={model}
      onSubmit={onSubmit}
      validationSchema={Yup.object({
        title: rule,
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGroupText field="title" label="Title" />
          <FormGroupCheckBox field="inTheaters" label="In Theaters" />
          <FormGroupText field="trailer" label="Trailer" />
          <FormGroupDate field="releaseDate" label="Release Date" />
          <FormGroupImage
            field="poster"
            label="Poster"
            imageURl={model.posterURL}
          />

          <Button disabled={formikProps.isSubmitting} type="submit">
            Save
          </Button>
          <Link to="/">
            Cancel
          </Link>
        </Form>
      )}
    </Formik>
  );
}

export interface MoviesFormProps {
  model: movieCreationDTO;
  onSubmit: (
    values: movieCreationDTO,
    action: FormikHelpers<movieCreationDTO>
  ) => void;
}
