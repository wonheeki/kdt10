import React, { useState } from 'react';

const HandlerEx2 = () => {
  const [state, setState] = useState({
    str: '검정색',
    color: 'black',
  });
  const changeColor = (nstr, ncolor) => {
    setState({ str: nstr, color: ncolor });
  };

  return (
    <div>
      <h1 style={{ color: state.color }}>{state.str} 글씨</h1>
      <button
        onClick={() => {
          changeColor('빨간색', 'red');
        }}
      >
        빨간색
      </button>
      <button
        onClick={() => {
          changeColor('파란색', 'blue');
        }}
      >
        파란색
      </button>
    </div>
  );
};

export default HandlerEx2;
