import React, { useState } from 'react';
import LifeCycleFuncChild from './LifeCycleFuncChild';

const LifeCycleFunc = () => {
  const [number, setNumber] = useState(0);
  const [visible, setVisible] = useState(true);

  const changeNumber = () => {
    setNumber(number + 1);
  };

  const changeVisible = () => {
    setVisible(!visible);
  };
  return (
    <>
      <h1>함수형 컴포넌트 라이프사이클</h1>
      <button onClick={changeNumber}>Plus</button>
      <button onClick={changeVisible}>On/Off</button>
      {visible && <LifeCycleFuncChild number={number} />}
    </>
  );
};

export default LifeCycleFunc;
