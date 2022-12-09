import anime from "animejs";
import { useDocumentTitle } from "@/hooks/useDocumentTitle";

interface ButtonControlProps {
  count: number;
  onUpdate?: () => void;
}

export function ButtonControl({
  count,
  onUpdate,
}: ButtonControlProps): JSX.Element {
  useDocumentTitle((intialDocumentTitle) => {
    document.title = `(${count}) ${intialDocumentTitle}`;
  });

  return (
    <button
      type="button"
      className="myButton mt-2 px-2 py-1 bg-indigo-600 text-white"
      onClick={() => {
        onUpdate?.();
        anime({
          targets: ".myButton",
          scale: 1.3,
          rotate: "-1turn",
          backgroundColor: "#e75192",
          color: "#fff",
          direction: "alternate",
        });
      }}
    >
      {count}
    </button>
  );
}
