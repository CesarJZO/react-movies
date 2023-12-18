/**
 * TextShower component
 * @param props Text
 * @returns A component
 */
export default function Head(props: TextShowerProps) {
  return (
    <h1>
      {props.text}
    </h1>
  )
}

interface TextShowerProps {
  text: string
}

Head.defaultProps = {
  text: 'Hello, World!'
} as TextShowerProps;
