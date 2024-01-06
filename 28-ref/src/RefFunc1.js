import { useRef } from 'react';
const RefFunc1 = () => {
  const inputRef = useRef();
  const handleFocus = () => {
    inputRef.current.focus();
  };
  return (
    <>
      <p>(함수형 컴포넌트)</p>
      {/* 선택하고 싶은 DOM 요소에 ref prop 설정 */}
      <input type="text" ref={inputRef} />

      <button onClick={handleFocus}>focus</button>
    </>
  );
};
export default RefFunc1;
