import ReactMarkdown from "react-markdown";
import { Field, useFormikContext } from "formik";

const styles: React.CSSProperties = {
  display: "flex",
  flexFlow: "column",
  width: "50%",
};

export default function FormGroupMarkdown({
  field,
  label,
}: FormGroupMarkdownProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { values } = useFormikContext<any>();

  return (
    <fieldset style={{display: "flex", gap: "16px", maxWidth: "100%"}}>
      <div style={styles}>
        <label htmlFor={field}>{label}</label>
        <Field name={field} as="textarea" />
      </div>

      <div style={styles}>
        <label>{label} preview</label>
        <ReactMarkdown >{values[field]}</ReactMarkdown>
      </div>
    </fieldset>
  );
}

export interface FormGroupMarkdownProps {
  field: string;
  label: string;
}
