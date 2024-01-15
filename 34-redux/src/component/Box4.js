import { useDispatch, useSelector } from 'react-redux';

// default 안해줬으면 {}객체로 감싸서 불러와야함
// 여기서 plus, minus는 함수
import { plus, minus } from '../store/counterReducer';

function Box4() {
  const number = useSelector((state) => state.counter.number);
  const dispatch = useDispatch();

  return (
    <div className="Box">
      <h2>Box4:{number} </h2>
      <button onClick={() => dispatch(plus())}>Plus</button>
      <button onClick={() => dispatch(minus())}>minus</button>
    </div>
  );
}

export default Box4;
