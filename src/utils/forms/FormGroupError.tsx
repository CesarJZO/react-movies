export default function FormGroupError({ message }: FormGroupErrorProps) {
  return <div role="alert" className="error">{message}</div>;
}

interface FormGroupErrorProps {
  message: string;
}
