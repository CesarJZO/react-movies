import { Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

export default function TheatersForm({ model, onSubmit }: TheatersFormProps) {
  return (
    <Formik
      initialValues={model}
      onSubmit={onSubmit}
      
    >
      
    </Formik>
  );
}

export interface TheatersFormProps {
  model: theaterCreationDTO;
  onSubmit: (values: theaterCreationDTO, actions: FormikHelpers<theaterCreationDTO>) => void;
}
