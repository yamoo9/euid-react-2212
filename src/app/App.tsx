import { useState, useEffect } from "react";
import { UserList } from "@/components";
import "@/styles/App.scss";

export interface Props {
  headline?: string;
  description?: string | JSX.Element;
}

export function App({
  headline: initialHeadline,
  description: initialDescription,
}: Props): JSX.Element {
  // React 상태 관리
  // const [count, setCount] = useState<number>(100);

  // const handleButtonClick = () => {
  //   console.log("clicked button");
  //   setCount((count) => count + 3);
  // };

  // 사이드 이펙트 처리 (연관된 상태와 함께 묶어서 관리 → 관심사의 분리)
  useEffect(() => {
    // side effects 처리 로직
    // React와 관련 없는 처리(일)
    // document.title = `(${count}) ${ORIGINAL_DOCUMENT_TITLE}`;
  });

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleUpdateHeadlineAndDescription = ({
    headline,
    description,
  }: Props) => {
    setHeadline(headline);
    setDescription(description);

    (document.querySelector(".App") as HTMLDivElement).style.cssText = `
      background: red;
      color: black;
    `;
  };

  return (
    <div className="App">
      <h1 className="App__Headline">{headline}</h1>
      <p>{description}</p>
      <UserList />
    </div>
  );
}
