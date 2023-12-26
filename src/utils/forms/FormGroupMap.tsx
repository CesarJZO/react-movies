import { useFormikContext } from "formik";
import Map from "../Map";
import { coordsDTO } from "../coords.model";

export default function FormGroupMap({
  coords,
  latField,
  lngField,
}: FormGroupMapProps) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const { values } = useFormikContext<any>();
  function updateFields(coords: coordsDTO) {
    values[latField] = coords.lat;
    values[lngField] = coords.lng;
  }
  return <Map coordinates={coords} handleMapClick={updateFields} />;
}

export interface FormGroupMapProps {
  coords: coordsDTO[];
  latField: string;
  lngField: string;
}

FormGroupMap.defaultProps = {
  coords: [],
};
