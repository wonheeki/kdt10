import React, { useState, useMemo } from 'react';

// useMemo : 연산의 결과값을 기억
function UseMemoEx() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // [before]
  //   const calc = () => {
  //     console.log('열심히 계산중...');
  //     for (let i = 0; i < 10000000; i++) {}
  //     return count ** 2;
  //   };

  // 임의의 큰 연산을 하는 함수(가정)
  // 버튼을 누를 때, input 입력할 때 둘 다 연산이 이뤄짐(calc 함수 호출)
  // input 값이 바뀔 때는 연산 필요 X => useMemo 이용해서 특정 값을 기억해서 그 값이 바뀔 때만 연산되도록 최적화

  //   [after]
  // calc 실행됐을 때 return 값이 count와 관련
  // 의존 배열에 count를 넣어주면, count에 값이 바뀔 때만 calc 함수를 실행
  // input 값이 바뀔 때는 실행 X(컴포넌트는 리렌더링)
  const calc = useMemo(() => {
    console.log('열심히 계산중...');
    for (let i = 0; i < 10000000; i++) {}
    return count ** 2;
  }, [count]);
  return (
    <>
      <h1>UseMemo 예제</h1>
      <button onClick={() => setCount(() => count + 1)}>plus</button>
      {/* input 태그에 값 입력할 때마다 input state 값이 바뀜 -> 리렌더링 -> 함수 호출 */}
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <p>count: {count}</p>
      {/* before */}
      {/* <p>calc : {calc()}</p> */}
      {/* after  */}
      <p>calc : {calc}</p>

      {/* before에서는 calc()라고하고 after에서는 그냥 calc라고 하고 차이점이 뭐여 */}
    </>
  );
}

export default UseMemoEx;
