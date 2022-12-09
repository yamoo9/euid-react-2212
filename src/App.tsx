import { useState, useEffect } from "react";
import ButtonControl from "./ButtonControl";
import "./styles/App.scss";

// React 월드의 사이드 이펙트
// - [x] 문서 객체 접근/조작
// - [ ] 네트워크 요청/응답
// - [ ] 이벤트 구독/취소
// - [ ] 오류 감지

export interface Props {
  headline?: string;
  description?: string | JSX.Element;
}

export function App({
  headline: initialHeadline,
  description: initialDescription,
}: Props): JSX.Element {
  // React 상태 관리
  const [count, setCount] = useState<number>(100);

  const handleButtonClick = () => {
    console.log("clicked button");
    setCount((count) => count + 3);
  };

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
      <ButtonControl count={count} onUpdate={handleButtonClick} />
    </div>
  );
}
