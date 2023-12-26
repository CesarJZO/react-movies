import { useState } from "react";
import { Link } from "react-router-dom";

import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import { movieCreationDTO } from "./movies.model";
import FormGroupText from "../utils/forms/FormGroupText";
import FormGroupCheckBox from "../utils/forms/FormGroupCheckBox";
import FormGroupDate from "../utils/forms/FormGroupDate";
import FormGroupImage from "../utils/forms/FormGroupImage";
import SelectorMultiple, {
  SelectorMultipleModel,
} from "../utils/SelectorMultiple";
import Button from "../utils/Button";
import { genreDTO } from "../genres/genres.model";
import { act } from "react-dom/test-utils";

export default function MoviesForm(props: MoviesFormProps) {
  const { model, onSubmit } = props;
  const [selectedGenres, setSelectedGenres] = useState<SelectorMultipleModel[]>(
    props.selectedGenres.map((genre) => {
      return { id: genre.id, name: genre.name };
    })
  );
  const [nonSelectedGenres, setNonSelectedGenres] = useState<SelectorMultipleModel[]>(
    props.nonSelectedGenres.map((genre) => {
      return { id: genre.id, name: genre.name };
    })
  );

  const rule = Yup.string()
    .required("This field is required")
    .firstLetterUppercase();
  return (
    <Formik
      initialValues={model}
      onSubmit={(values, actions) => {
        values.genresIds = selectedGenres.map((value) => value.id);
        onSubmit(values, actions);
      }}
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

          <div>
            <SelectorMultiple
              selected={selectedGenres}
              notSelected={nonSelectedGenres}
              onChange={(selected, nonSelected) => {
                setSelectedGenres(selected);
                setNonSelectedGenres(nonSelected);
              }}
            />
          </div>

          <Button disabled={formikProps.isSubmitting} type="submit">
            Save
          </Button>
          <Link to="/">Cancel</Link>
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
  selectedGenres: genreDTO[];
  nonSelectedGenres: genreDTO[];
}
