import { Form, Formik, FormikHelpers } from "formik";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText.tsx";
import Button from "../utils/Button.tsx";
import FormGroupMap from "../utils/FormGroupMap.tsx";
import { coordsDTO } from "../utils/coords.model";

export default function TheatersForm({ model, onSubmit }: TheatersFormProps) {
  function transformCoord(): coordsDTO[] | undefined {
    if (model.latitude && model.longitude) {
      console.log(model.latitude);
      const response: coordsDTO = {
        lat: model.latitude,
        lng: model.longitude,
      };
      return [response];
    }
    return undefined;
  }

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

          <FormGroupMap
            latField={"latitude"}
            lngField={"longitude"}
            coords={transformCoord()}
          />

          <Button disabled={formikProps.isSubmitting} type="submit">
            Save
          </Button>
          <Link to="/theaters">Cancel</Link>
        </Form>
      )}
    </Formik>
  );
}

export interface TheatersFormProps {
  model: theaterCreationDTO;
  onSubmit: (
    values: theaterCreationDTO,
    actions: FormikHelpers<theaterCreationDTO>
  ) => void;
}
