import { useDocumentTitle } from "./hooks/useDocumentTitle";

interface ButtonControlProps {
  count: number;
  onUpdate?: () => void;
}

export default function ButtonControl({
  count,
  onUpdate,
}: ButtonControlProps): JSX.Element {
  useDocumentTitle((intialDocumentTitle) => {
    document.title = `(${count}) ${intialDocumentTitle}`;
  });

  return (
    <button
      type="button"
      className="mt-2 px-2 py-1 bg-indigo-600 text-white"
      onClick={onUpdate}
    >
      {count}
    </button>
  );
}
