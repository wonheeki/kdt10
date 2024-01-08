import { useReducer } from 'react';

const initState = { value: 0 }; // 초기 상태값

// { type: 'INCREMENT' } 이 통째로 action 으로 담겨온다고 생각
const reducer = (prevState, action) => {
  // 현재 state와 action 값을 전달 받아서 새로운 state 값을 반환
  switch (action.type) {
    case 'INCREMENT':
      return { value: prevState.value + 1 };

    case 'DECREMENT':
      return { value: prevState.value - 1 };

    case 'RESET':
      return { value: 0 };

    default:
      return { value: prevState.value };
  }
};
function UseReducerEx() {
  // reducer : state를 업데이트한는 함수
  // dispatch : 액션(state가 어떻게 변경되어야 하는지에 대한 힌트)을 발생시키는 함수
  // state : 현재 상태
  // useReducer는 [state,dispatch]를 리턴함
  const [state, dispatch] = useReducer(reducer, initState);

  const increment = () => dispatch({ type: 'INCREMENT' });
  const decrement = () => dispatch({ type: 'DECREMENT' });
  const reset = () => dispatch({ type: 'RESET' });
  return (
    <>
      <h1>useReducer Ex</h1>
      <h2>{state.value}</h2>
      <button onClick={increment}>Plus</button>
      <button onClick={decrement}>Minus</button>
      <button onClick={reset}>Reset</button>
    </>
  );
}
export default UseReducerEx;
