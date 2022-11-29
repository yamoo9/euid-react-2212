// -----------------------------------------------------------------------------------------
// 📌 타입 추론(Type Inference)
// ⭐️ URL : https://bit.ly/3gMGetb
// -----------------------------------------------------------------------------------------
// - 변수에 할당된 값을 통해 타입을 추론하는 것을 말합니다.
// - TypeScript는 변수에 타입 에너테이션이 선언되지 않았다 하더라도 값을 통해 타입을 추론합니다.
// -----------------------------------------------------------------------------------------

{
  let notDefiend: undefined;

  let empty: null;

  // 문자 타입(string type)
  let message: string = `변수 타입은 변수 이름 뒤에 ':type'을 작성하는 것을 말하며 이를 "타입 에너테이션"이라 부릅니다.`;

  // 숫자 타입(number type)
  let currentYear: number = 2022;

  // 불리언 타입(boolean type)
  let isWatch: boolean = false;

  // 심볼(symbol type)
  let uniqueId: symbol = Symbol('uniqueId');

  // 객체(object type)
  const rectangle: { width: number; height: number } = {
    width: 100,
    height: 80,
  };

  // 배열(array type)
  const namesList: string[] = ['최수영', '한영주', '박호연'];

  // 함수(function type)
  const sum: (x: number, y: number, printable: boolean) => void | number = (
    x,
    y,
    printable
  ) => (printable ? console.log(x + y) : x + y);
}
