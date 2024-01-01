export default function ErrorPrinter({ errors }: ErrorPrinterProps) {
  if (errors && Array.isArray(errors)) {
    return (
      <ul style={{ color: "#e06c75" }}>
        {errors.map((error, index) => (
          <li key={index}>{error}</li>
        ))}
      </ul>
    );
  } else {
    return <></>;
  }
}

export interface ErrorPrinterProps {
  errors?: string[];
}
