import { ErrorMessage, Field } from "formik";
import FormGroupError from "./FormGroupError";

export default function FormGroupText({
  field,
  label,
  placeholder,
}: FormGroupTextProps) {
  return (
    <>
      <fieldset>
        {label ? <label htmlFor={field}>{label}</label> : null}
        <Field id={field} name={field} placeholder={placeholder} />
        <ErrorMessage name={field}>
          {(message) => <FormGroupError message={message} />}
        </ErrorMessage>
      </fieldset>
    </>
  );
}

interface FormGroupTextProps {
  field: string;
  label?: string;
  placeholder?: string;
}
