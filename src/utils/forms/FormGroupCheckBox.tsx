import { Field } from "formik";

export default function FormGroupCheckBox({ field, label }: FormGroupCheckBoxProps) {
  return (
    <fieldset>
      <Field id={field} name={field} type="checkbox" />
      <label htmlFor={field}>{label}</label>
    </fieldset>
  );
}

export interface FormGroupCheckBoxProps {
  field: string;
  label: string;
}
