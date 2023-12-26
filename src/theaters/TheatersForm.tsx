import {Form, Formik, FormikHelpers} from "formik";
import {Link} from "react-router-dom";
import * as Yup from "yup";
import FormGroupText from "../utils/FormGroupText.tsx";
import Button from "../utils/Button.tsx";

export default function TheatersForm({model, onSubmit}: TheatersFormProps) {
    return (
        <Formik
            initialValues={model}
            onSubmit={onSubmit}
            validationSchema={Yup.object({
                name: Yup.string().required("This field is required").firstLetterUppercase()
            })}
        >
            {(formikProps) => (
                <Form>
                    <FormGroupText field="name" label="Name"/>
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
    onSubmit: (values: theaterCreationDTO, actions: FormikHelpers<theaterCreationDTO>) => void;
}
