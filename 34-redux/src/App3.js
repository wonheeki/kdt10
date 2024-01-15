import { useDispatch, useSelector } from 'react-redux';
import './styles/Box.css';

// 내가 불러올 state를 선택하기

function App() {
  const isVisible = useSelector((state) => state.isVisible.isVisible);
  return (
    <>
      <h1>React Redux Ex</h1>
      <h2>isVisible 값은 "{isVisible ? '참' : '거짓'}"이다.</h2>
      <Box1></Box1>
    </>
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
  const dispatch = useDispatch();
  const isVisible = useSelector((state) => state.isVisible.isvisible);

  return (
    <div className="Box">
      <h2>isVisible 값은 "{isVisible ? '참' : '거짓'}"이다.</h2>
      <button onClick={() => dispatch({ type: 'change' })}>Change</button>
    </div>
  );
};
export default App;
