import { Form, Formik, FormikHelpers } from "formik";
import { actorCreationDTO } from "./actors.model";
import FormGroupText from "../utils/forms/FormGroupText";
import Button from "../utils/Button";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import FormGroupDate from "../utils/forms/FormGroupDate";
import FormGroupImage from "../utils/forms/FormGroupImage";
import FormGroupMarkdown from "../utils/forms/FormGroupMarkdown";

export default function ActorsForm({ model, onSubmit }: ActorsFormProps) {
  return (
    <Formik
      initialValues={model}
      onSubmit={onSubmit}
      validationSchema={Yup.object({
        name: Yup.string()
          .required("This field is required")
          .firstLetterUppercase(),
      })}
    >
      {(formikProps) => (
        <Form>
          <FormGroupText field="name" label="Name" />
          <FormGroupDate field="dateOfBirth" label="Date of Birth" />
          <FormGroupImage field="picture" label="Picture" imageURl={model.pictureURL} />
          <FormGroupMarkdown field="biography" label="Biography" />

          <Button disabled={formikProps.isSubmitting} type="submit">
            Save
          </Button>
          <Link to="/actors">Cancel</Link>
        </Form>
      )}
    </Formik>
  );
}

export interface ActorsFormProps {
  model: actorCreationDTO;
  onSubmit: (
    values: actorCreationDTO,
    actions: FormikHelpers<actorCreationDTO>
  ) => void;
}
