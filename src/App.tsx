import { useState } from "react";
import { FormControls } from "./FormControls";
import "./styles/App.scss";

export interface Props {
  headline?: string;
  description?: string | JSX.Element;
}

export function App({
  headline: initialHeadline,
  description: initialDescription,
}: Props): JSX.Element {
  // React 상태 관리
  const [headline, setHeadline] = useState<string | undefined>(
    initialHeadline || "React Application"
  );

  const [description, setDescription] = useState<Props["description"]>(
    initialDescription || (
      <>
        React is <abbr title="User Interface">UI</abbr> Library
      </>
    )
  );

  // React 이벤트 리스너(핸들러) → 콜백(callback)
  // 사이드 이펙트 (실제 DOM에 접근 가능)
  const handleUpdateHeadlineAndDescription = ({
    headline,
    description,
  }: Props) => {
    setHeadline(headline);
    setDescription(description);

    (document.querySelector(".App")! as HTMLDivElement).style.cssText = `
      background: red;
      color: black;
    `;
  };

  return (
    <div className="App">
      <FormControls onUpdate={handleUpdateHeadlineAndDescription} />
      <h1 className="App__Headline">{headline}</h1>
      <p>{description}</p>
    </div>
  );
}
