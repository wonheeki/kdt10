import { useSelector, useDispatch } from 'react-redux';
function App1() {
  const number = useSelector((state) => state.number);
  return (
    <div className="App">
      <h1>React Redux Ex</h1>
      <h2>number: {number}</h2>
      <Box1 />
    </div>
  );
}

const Box1 = () => {
  return (
    <div className="Box">
      <h2>Box1</h2>
      <Box2 />
    </div>
  );
};
const Box2 = () => {
  return (
    <div className="Box">
      <h2>Box2 </h2>
      <Box3 />
    </div>
  );
};
const Box3 = () => {
  return (
    <div className="Box">
      <h2>Box3 </h2>
      <Box4 />
    </div>
  );
};
const Box4 = () => {
  // 내가 불러올 state를 선택하기
  const number = useSelector((state) => state.number);
  const dispatch = useDispatch();

  return (
    <div className="Box">
      <h2>Box4:{number} </h2>
      <button onClick={() => dispatch({ type: 'PLUS' })}>Plus</button>
      <button onClick={() => dispatch({ type: 'MINUS' })}>minus</button>
    </div>
  );
};
export default App1;
