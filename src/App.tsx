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

  const handleUpdateHeadlineAndDescription = ({
    headline,
    description,
  }: Props) => {
    setHeadline(headline);
    setDescription(description);
  };

  return (
    <div className="App">
      <FormControls onUpdate={handleUpdateHeadlineAndDescription} />
      <h1 className="App__Headline">{headline}</h1>
      <p>{description}</p>
    </div>
  );
}
