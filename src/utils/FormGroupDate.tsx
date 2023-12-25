import { useFormikContext } from "formik";
import FormGroupError from "./FormGroupError";

export default function FormGroupDate({ field, label }: FormGroupDateProps) {
  const { values, validateForm, touched, errors } = useFormikContext();
  return (
    <fieldset>
      <label htmlFor={field}>{label}</label>
      <input
        type="date"
        id={field}
        name={field}
        defaultValue={new Date().toISOString().slice(0, 10)}
        onChange={e => {
          const date = new Date(e.currentTarget.value);
          values[field] = date;
          validateForm();
        }

        }
      />
      {touched[field] && errors[field] ? <FormGroupError message={errors[field]?.toString()} /> : <></>}
    </fieldset>
  );
}

export interface FormGroupDateProps {
  field: string;
  label?: string;
}
