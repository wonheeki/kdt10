import React, { useState } from 'react';

// const HandlerEx3 = () => {
//   const [state, setState] = useState({
//     show: 'block',
//     str: '사라져라',
//   });
//   const changeShow = () => {
//     if (state.str == '사라져라') {
//       setState({ show: 'none', str: '보여라' });
//     } else {
//       setState({ show: 'block', str: '사라져라' });
//     }
//   };

//   return (
//     <div>
//       <button onClick={changeShow}>{state.str}</button>
//       <h1 style={{ display: state.show }}>안녕하세요</h1>
//     </div>
//   );
// };

const HandlerEx3 = () => {
  let [display, changeDisplay] = useState(true);

  const setDisplay = () => {
    changeDisplay(!display);
  };

  return (
    <>
      <button onClick={setDisplay}>{display ? '사라져라' : '보여라'}</button>
      {/* display: true 일때만 화면에 나올 것 */}
      {display && <h4>안녕하세요</h4>}
    </>
  );
};

export default HandlerEx3;
