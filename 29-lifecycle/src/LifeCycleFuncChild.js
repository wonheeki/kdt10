import React, { useEffect, useState } from 'react';

const LifeCycleFuncChild = ({ number }) => {
  const [input, setInput] = useState('');
  // Mount 시점에만 실행
  useEffect(() => {
    console.log('컴포넌트 마운트!!');
  }, []);

  // Unmount 시점에만 실행
  useEffect(() => {
    return () => {
      console.log('컴포넌트 언마운트!!');
    };
  }, []);

  // Mount or Unmount 시점에 실행
  useEffect(() => {
    console.log('컴포넌트 마운트 or 업데이트!!');
  });

  // input 상태가 업데이트될 때
  useEffect(() => {
    console.log('마운트 or Input 상태가 변경됨에 따라 컴포넌트 업데이트 !!');
  }, [input]);
  return (
    <>
      자식 컴포넌트
      <div>현재 Number 값은 {number}입니다.</div>
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
    </>
  );
};

export default LifeCycleFuncChild;
