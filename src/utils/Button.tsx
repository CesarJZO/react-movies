export default function Button({
  onClick,
  type,
  children,
  disabled,
}: ButtonProps) {
  return (
    <button onClick={onClick} type={type} disabled={disabled}>
      {children}
    </button>
  );
}

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type: "button" | "submit";
  disabled?: boolean;
}

Button.defaultProps = {
  type: "button",
  disabled: false,
};
