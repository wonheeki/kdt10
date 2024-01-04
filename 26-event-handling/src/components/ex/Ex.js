import React, { useState } from 'react';
import peach from '../../peach.jpg';
import banana from '../../banana.jpg';
import orange from '../../orange.jpg';
import watermelon from '../../watermelon.jpeg';

const Ex = () => {
  const [state, setState] = useState({
    img: peach,
    color: 'white',
    backColor: 'red',
    str: '',
  });

  const change = (e, type) => {
    console.log(type);
    if (type === 'img') {
      let fruitimg = e.target.value;
      if (fruitimg === 'peach') {
        fruitimg = peach;
      } else if (fruitimg === 'banana') {
        fruitimg = banana;
      } else if (fruitimg === 'orange') {
        fruitimg = orange;
      } else {
        fruitimg = watermelon;
      }
      console.log('fruitimg >', fruitimg);
      // 이 prevState는 어디서 넘어오는 값인고
      setState((prevState) => ({
        ...prevState,
        img: fruitimg,
      }));
    } else {
      setState((prevState) => ({
        ...prevState,
        // 이 대괄호 뭔데?
        [type]: e.target.value,
      }));
      console.log(e.target.value);
    }
  };

  //   const changeText = (e) => {
  //     setState((prevState) => ({
  //       ...prevState,
  //       str: e.target.value,
  //     }));
  //   };

  //   const changeImg = (e) => {
  //     let fruitimg = e.target.value;
  //     if (fruitimg === 'peach') {
  //       fruitimg = peach;
  //     } else if (fruitimg === 'banana') {
  //       fruitimg = banana;
  //     } else if (fruitimg === 'orange') {
  //       fruitimg = orange;
  //     } else {
  //       fruitimg = watermelon;
  //     }
  //     setState((prevState) => ({
  //       ...prevState,
  //       img: fruitimg,
  //     }));
  //     // console.log(fruitimg);
  //   };
  //   const changeColor = (e) => {
  //     setState((prevState) => ({
  //       ...prevState,
  //       color: e.target.value,
  //     }));
  //   };
  //   const changeBackColor = (e) => {
  //     setState((prevState) => ({
  //       ...prevState,
  //       backColor: e.target.value,
  //     }));
  //   };
  return (
    <div>
      과일:
      <select onChange={(e) => change(e, 'img')}>
        <option value="peach">복숭아</option>
        <option value="banana">바나나</option>
        <option value="watermelon">수박</option>
        <option value="orange">오렌지</option>
      </select>
      배경색:
      <select onChange={(e) => change(e, 'backColor')}>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
        <option value="white">하양</option>
        <option value="black">검정</option>
      </select>
      글자색:
      <select onChange={(e) => change(e, 'color')}>
        <option value="white">하양</option>
        <option value="red">빨강</option>
        <option value="orange">주황</option>
        <option value="yellow">노랑</option>
        <option value="green">초록</option>
        <option value="blue">파랑</option>
        <option value="purple">보라</option>
        <option value="pink">분홍</option>
        <option value="black">검정</option>
      </select>
      <br />
      내용:
      <input type="text" onChange={(e) => change(e, 'str')} />
      <div>
        <img src={state.img} className="fruits_img" alt="fruits_img"></img>
        <div
          className="text-box"
          style={{ color: state.color, backgroundColor: state.backColor }}
        >
          {state.str}
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default Ex;
