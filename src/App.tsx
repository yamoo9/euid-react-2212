import "./styles/App.scss";

interface AppProps {
  headline: string;
  description: JSX.Element;
}

export function App({ headline, description }: AppProps): JSX.Element {
  return (
    <div className="App">
      <h1 className="App__Headline">{headline}</h1>
      <p>{description}</p>
    </div>
  );
}
