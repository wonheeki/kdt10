import { UserContext } from './UserContext';
import React, { useState } from 'react';

// app.js 의 userprovider 하위의 children을 말하는거임(props 특징)
function UserProvider({ children }) {
  // props 객체 형태의 children을 인자로 받아서 하위 요소로 삽입

  // defaultUser로 설정한 값 (name, setName)
  console.log(UserContext);
  // 이름 변경할 수 있게 useState 사용

  // default값 사용하기
  //   const [name, setName] = useState(UserContext._currentValue.name);
  const [name, setName] = useState('홍길동');

  return (
    <UserContext.Provider value={{ name: name, setName: setName }}>
      {/* children 지우면 사라짐 */}
      {children}
    </UserContext.Provider>
  );
}

export default UserProvider;
