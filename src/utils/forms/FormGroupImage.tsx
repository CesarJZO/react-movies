import { useFormikContext } from "formik";
import { ChangeEvent, useState } from "react";

// declare props and object destructuring to get field and label within the function body
export default function FormGroupImage(props: FormGroupImageProps) {
  const { field, label } = props;
  const [imageBase64, setImageBase64] = useState("");
  const [imageURl, setImageURl] = useState(props.imageURl);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { values } = useFormikContext<any>();

  const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.currentTarget.files) {
      const file = e.currentTarget.files[0];
      toBase64(file)
        .then((value: string) => setImageBase64(value))
        .catch((error) => console.log(error));

      values[field] = file;
      setImageURl("");
    }
  };

  const toBase64 = (file: File) =>
    new Promise<string>((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result as string);
      reader.onerror = (error) => reject(error);
    });

  return (
    <fieldset>
      <label htmlFor={field}>{label}</label>
      <input
        type="file"
        id={field}
        name={field}
        accept=".jpg,.png,.jpeg"
        onChange={handleImageChange}
      />
      {imageBase64 ? (
        <img style={{ width: "64px" }} src={imageBase64} alt="Selected image" />
      ) : null}
      {imageURl ? (
        <img style={{ width: "64px" }} src={imageURl} alt="Selected image" />
      ) : null}
    </fieldset>
  );
}

export interface FormGroupImageProps {
  field: string;
  label: string;
  imageURl: string;
}

FormGroupImage.defaultProps = {
  imageURl: "",
};
