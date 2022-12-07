import { useState } from "react";
import "./styles/App.scss";

interface Props {
  headline?: string;
  description?: string | JSX.Element;
}

export function App({
  headline: initialHeadline,
  description: initialDescription,
}: Props): JSX.Element {
  const [headline] = useState<string>(initialHeadline || "React Application");
  const [description] = useState<string | JSX.Element>(
    initialDescription || (
      <>
        React is <abbr title="User Interface">UI</abbr> Library
      </>
    )
  );

  return (
    <div className="App">
      <h1 className="App__Headline">{headline}</h1>
      <p>{description}</p>
    </div>
  );
}
