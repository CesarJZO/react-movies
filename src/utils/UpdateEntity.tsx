import { ReactElement, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios, { AxiosResponse } from "axios";
import ErrorPrinter from "./ErrorPrinter";
import Loading from "./Loading";

export default function UpdateEntity<TCreation, TRead>({
  url,
  indexUrl,
  entityName,
  children,
  transform,
  transformToFormData,
}: UpdateEntityProps<TCreation, TRead>) {
  const { id } = useParams();

  const [entity, setEntity] = useState<TCreation>();
  const [errors, setErrors] = useState<string[]>([]);

  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${url}/${id}`)
      .then((res: AxiosResponse<TRead>) => setEntity(transform(res.data)));
  }, []);

  const edit = async (entity: TCreation) => {
    try {
      if (transformToFormData) {
        const formData = transformToFormData(entity);
        await axios({
          method: "put",
          url: `${url}/${id}`,
          data: formData,
          headers: { "Content-Type": "multipart/form-data" },
        });
      }
      else { 
        await axios.put(`${url}/${id}`, entity);
      }
      navigate(indexUrl);
    } catch (error) {
      setErrors((error as any).response.data);
    }
  };

  return (
    <>
      <h2>Update {entityName}</h2>

      <ErrorPrinter errors={errors} />

      {entity ? children(entity, edit) : <Loading />}
    </>
  );
}

interface UpdateEntityProps<TCreation, TRead> {
  url: string;
  indexUrl: string;
  entityName: string;
  children: (
    entity: TCreation,
    edit: (entity: TCreation) => void
  ) => ReactElement;
  transform: (entity: TRead) => TCreation;
  transformToFormData?: (model: TCreation) => FormData;
}

UpdateEntity.defaultProps = {
  transform: (entity: any) => entity,
};
