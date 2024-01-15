import React, { useState } from 'react';
import './styles/Box.css';

function App() {
  const [number, setNumber] = useState(0);
  const plus = () => setNumber(number + 1);
  const minus = () => setNumber(number - 1);
  return (
    <div className="App">
      <h1>React state Ex</h1>
      <Box1 number={number} plus={plus} minus={minus}></Box1>
    </div>
  );
}

const Box1 = ({ number, plus, minus }) => {
  return (
    <div className="Box">
      <h2>Box1 : {number}</h2>
      <Box2 number={number} plus={plus} minus={minus}></Box2>
    </div>
  );
};
const Box2 = ({ number, plus, minus }) => {
  return (
    <div className="Box">
      <h2>Box2 : {number}</h2>
      <Box3 number={number} plus={plus} minus={minus}></Box3>
    </div>
  );
};
const Box3 = ({ number, plus, minus }) => {
  return (
    <div className="Box">
      <h2>Box3 : {number}</h2>
      <Box4 number={number} plus={plus} minus={minus}></Box4>
    </div>
  );
};
const Box4 = ({ number, plus, minus }) => {
  return (
    <div className="Box">
      <h2>Box4 : {number}</h2>
      <button onClick={plus}>Plus</button>
      <button onClick={minus}>minus</button>
    </div>
  );
};

export default App;
