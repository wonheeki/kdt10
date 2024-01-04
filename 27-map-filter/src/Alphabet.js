import React, { useState } from 'react';

function Alphabet() {
  const [alphabet, setAlphabet] = useState(['b', 'a', 'n', 'a', 'n', 'a']);
  const [inputAlpha, setInputAlpha] = useState('');

  const [alphabet2, setAlphabet2] = useState([
    {
      id: 1,
      alpha: 'a',
    },
    {
      id: 2,
      alpha: 'p',
    },
    {
      id: 3,
      alpha: 'p',
    },
    {
      id: 4,
      alpha: 'l',
    },
    {
      id: 5,
      alpha: 'e',
    },
  ]);

  const addAlpha = () => {
    // input값이 빈칸일 때, 알파벳의 상태가 변경되지 않도록
    if (inputAlpha.trim().length == 0) return;
    const newAlpha = alphabet2.concat({
      id: alphabet2.length + 1,
      alpha: inputAlpha,
    });

    setAlphabet2(newAlpha);
    setInputAlpha('');
  };

  const handleKeyDown = (e) => {
    console.log(e);

    // bugfix : IME 문제 해결 (한글 마지막 한글자가 더 나옴)
    if (e.nativeEvent.isComposing) return;
    if (e.code === 'Enter') addAlpha();
  };

  const deleteAlpha = (targetId) => {
    // targetId : 삭제할 요소의 id
    const newAlpha = alphabet2.filter((a) => {
      return a.id !== targetId;
    });
    setAlphabet2(newAlpha);
  };

  return (
    <>
      {/* map */}
      {/* {alphabet.map((value, idx) => {
          return <li key={idx}>{value}</li>;
        })} */}
      {/* 한줄 일때 return과 {} 생략 가능 */}
      {/* {alphabet.map((value, idx) => (
          <li key={idx}>{value}</li>
        ))} */}

      {alphabet2.map((value) => (
        <li key={value.id} onDoubleClick={() => deleteAlpha(value.id)}>
          {value.alpha}
        </li>
      ))}

      <input
        type="text"
        placeholder="알파벳 입력"
        value={inputAlpha}
        onChange={(e) => {
          setInputAlpha(e.target.value);
        }}
        onKeyDown={handleKeyDown}
        // 실습
        // onKeyDown={}
      />
      <button onClick={addAlpha}>Add</button>

      {/* 단축 평가 ?? */}
      {inputAlpha.length == 0 && <span>알파벳을 입력해주세요</span>}
      {'hello' || <span>정의된 값이 없어요!</span>}
    </>
  );
}

export default Alphabet;
