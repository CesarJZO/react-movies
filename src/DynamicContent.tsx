export default function DynamicContent(props: DynamicContentProps) {
  return (
    <div>
      {props.showSecret ? <span>Secret: 42</span> : null}
    </div>
  );
}

interface DynamicContentProps {
  showSecret: boolean;
}
