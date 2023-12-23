import { ReactNode } from "react";
import Loading from "./Loading";

export default function GenericList<T>({
  list,
  children,
  loadingUI,
  emptyListUI,
}: GenericListProps<T>) {
  if (!list) {
    return loadingUI ? loadingUI : <Loading />;
  } else if (list.length === 0) {
    return emptyListUI ? emptyListUI : <p>No items found!</p>;
  } else {
    return <>{children}</>;
  }
}

interface GenericListProps<T> {
  list: T[];
  children: ReactNode;
  loadingUI?: ReactNode;
  emptyListUI?: ReactNode;
}
