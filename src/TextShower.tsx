/**
 * TextShower component
 * @param props Text
 * @returns A component
 */
export default function TextShower(props: TextShowerProps) {
  return (
    <span>
      {props.text}
    </span>
  )
}

interface TextShowerProps {
  text: string
}

TextShower.defaultProps = {
  text: 'Hello, World!'
} as TextShowerProps;
