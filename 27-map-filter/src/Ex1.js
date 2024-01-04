import React, { useState } from 'react';

function Ex1() {
  const [user, setUser] = useState([
    {
      name: '코디',
      email: 'codi@gmail.com',
    },
  ]);

  const [state, setState] = useState({
    name: '',
    email: '',
  });

  const addUser = () => {
    if (state.email.trim().length == 0 || state.name.trim().length == 0) return;

    // https://developer.mozilla.org/ko/docs/Web/Javascript/Reference/Global_Objects/Array/concat

    // 두 개 이상의 배열을 병합하는 데 사용됩니다. 이 메서드는 기존 배열을 변경하지 않고, 새 배열을 반환
    const newUser = user.concat({
      name: state.name,
      email: state.email,
    });
    console.log(newUser);
    setUser(newUser);
    setState({ name: '', email: '' });
  };

  const deleteUser = (e) => {
    console.log('삭제');
    e.remove();
  };

  const handleKeyDown = (e) => {
    console.log(e);

    // bugfix : IME 문제 해결 (한글 마지막 한글자가 더 나옴)
    if (e.nativeEvent.isComposing) return;
    if (e.code === 'Enter') addUser();
  };
  return (
    <>
      <input
        placeholder="이름"
        value={state.name}
        onChange={(e) => {
          setState((prevState) => ({ ...prevState, name: e.target.value }));
        }}
        onKeyDown={handleKeyDown}
      />
      <input
        placeholder="이메일"
        value={state.email}
        onChange={(e) => {
          console.log(e.target.value);
          setState((prevState) => ({ ...prevState, email: e.target.value }));
        }}
        onKeyDown={handleKeyDown}
      />
      <button onClick={addUser}>등록</button>
      {user.map((value) => (
        <li
          style={{ listStyleType: 'none' }}
          key={value.name}
          onDoubleClick={(e) => deleteUser(e.target)}
        >
          {value.name} : {value.email}
        </li>
      ))}
    </>
  );
}

export default Ex1;
