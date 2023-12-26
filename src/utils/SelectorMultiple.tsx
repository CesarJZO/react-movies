export default function SelectorMultiple({
  selected,
  notSelected,
  onChange,
}: SelectorMultipleProps) {
  function select(item: SelectorMultipleModel) {
    const s = [...selected, item];
    const ns = notSelected.filter((x) => x.id !== item.id);
    onChange(s, ns);
  }

  function deselect(item: SelectorMultipleModel) {
    const ns = [...notSelected, item];
    const s = selected.filter((x) => x.id !== item.id);
    onChange(s, ns);
  }

  function selectAll() {
    const s = [...selected, ...notSelected];
    const ns: SelectorMultipleModel[] = [];
    onChange(s, ns);
  }

  function deselectAll() {
    const ns = [...selected, ...notSelected];
    const s: SelectorMultipleModel[] = [];
    onChange(s, ns);
  }

  return (
    <div>
      <ul>
        {notSelected.map((item) => (
          <li key={item.id} onClick={() => {}}>
            {item.name}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={selectAll}>{">>"}</button>
        <button onClick={deselectAll}>{"<<"}</button>
      </div>
      <ul>
        {selected.map((item) => (
          <li key={item.id} onClick={() => {}}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export interface SelectorMultipleProps {
  selected: SelectorMultipleModel[];
  notSelected: SelectorMultipleModel[];
  onChange: (
    selected: SelectorMultipleModel[],
    notSelected: SelectorMultipleModel[]
  ) => void;
}

export interface SelectorMultipleModel {
  id: number;
  name: string;
}
