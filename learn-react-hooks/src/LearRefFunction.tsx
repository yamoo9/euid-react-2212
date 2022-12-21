import { useState, useEffect, useRef } from "react";

export function LearRefFunction() {
  // Ref의 첫번째 사용 방법 (DOM 요소 접근/조작)
  // 접근성은 필히 명령형으로만 처리 가능하다.
  // 명령형 프로그래밍
  const containerRef = useRef<null | HTMLDivElement>(null);

  // componentDidMount
  // 컴포넌트 마운트 이후 시점에 콜백(실행)
  useEffect(() => {
    const { current: containerElement } = containerRef;
    if (containerElement) {
      containerElement.style.cssText = `
        padding: 20px;
        border: 4px solid currentColor;
        color: #e75192;
      `;
    }
  }, []);

  /* -------------------------------------------------------------------------- */

  let pleaseRememberMeRef = useRef<string>("나를 기억해주세요."); // { current: '나를 기억해주세요.' }

  console.log("initialization pleaseRememberMe", pleaseRememberMeRef);

  const [message, setMessage] = useState<string>("React.FC");

  const handleUpdateState = () => {
    setMessage((prevMessage) => prevMessage + "😃");
  };

  const handleUpdateRefData = () => {
    if (pleaseRememberMeRef.current.indexOf("주세요") > -1) {
      pleaseRememberMeRef.current = "나를 기억해주셨군요! 😉";
    } else {
      pleaseRememberMeRef.current += "🥹";
    }

    console.log(
      "updated pleaseRememberMe variable in Function",
      pleaseRememberMeRef.current
    );
  };

  return (
    <div lang="en" ref={containerRef}>
      <button type="button" onClick={handleUpdateState}>
        update greeting message
      </button>
      <h1>{message}</h1>
      <button type="button" onClick={handleUpdateRefData}>
        update remember me message
      </button>
      <p>{pleaseRememberMeRef.current}</p>
    </div>
  );
}
