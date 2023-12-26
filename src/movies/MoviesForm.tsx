import { useState } from "react";
import { Link } from "react-router-dom";

import { Form, Formik, FormikHelpers } from "formik";
import * as Yup from "yup";

import FormGroupText from "../utils/forms/FormGroupText";
import FormGroupCheckBox from "../utils/forms/FormGroupCheckBox";
import FormGroupDate from "../utils/forms/FormGroupDate";
import FormGroupImage from "../utils/forms/FormGroupImage";
import SelectorMultiple, {
  SelectorMultipleModel,
} from "../utils/SelectorMultiple";
import TypeAheadActors from "../actors/TypeAheadActors";
import Button from "../utils/Button";

import { movieCreationDTO } from "./movies.model";
import { genreDTO } from "../genres/genres.model";
import { theaterDTO } from "../theaters/theaters.model";
import { actorMovieDTO } from "../actors/actors.model";

export default function MoviesForm(props: MoviesFormProps) {
  const { model, onSubmit } = props;

  const map = (
    array: { id: number; name: string }[]
  ): SelectorMultipleModel[] => {
    return array.map((value) => ({ id: value.id, name: value.name }));
  };

  const [selectedGenres, setSelectedGenres] = useState<SelectorMultipleModel[]>(
    map(props.selectedGenres)
  );
  const [nonSelectedGenres, setNonSelectedGenres] = useState<
    SelectorMultipleModel[]
  >(map(props.nonSelectedGenres));

  const [selectedTheaters, setSelectedTheaters] = useState<
    SelectorMultipleModel[]
  >(map(props.selectedTheaters));
  const [nonSelectedTheaters, setNonSelectedTheaters] = useState<
    SelectorMultipleModel[]
  >(map(props.selectedTheaters));

  const [selectedActors, setSelectedActors] = useState<actorMovieDTO[]>([]);

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
          <div>
            <SelectorMultiple
              selected={selectedTheaters}
              notSelected={nonSelectedTheaters}
              onChange={(selected, nonSelected) => {
                setSelectedTheaters(selected);
                setNonSelectedTheaters(nonSelected);
              }}
            />
          </div>

          <TypeAheadActors
            actors={selectedActors}
            onAdd={(actors) => {
              setSelectedActors(actors);
            }}
            onRemove={(actors) => {
              const actorsFiltered = selectedActors.filter(
                (x) => x.id !== actors.id
              );
              setSelectedActors(actorsFiltered);
            }}
            uiList={(actor: actorMovieDTO) => (
              <>
                {actor.name} /{" "}
                <input
                  placeholder="Character"
                  type="text"
                  value={actor.character}
                  onChange={(e) => {
                    const index = selectedActors.findIndex(
                      (x) => x.id === actor.id
                    );

                    const actors = [...selectedActors];
                    actors[index].character = e.currentTarget.value;
                    setSelectedActors(actors);
                  }}
                />
              </>
            )}
          />

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
  selectedTheaters: theaterDTO[];
}
