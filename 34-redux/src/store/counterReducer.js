// 나중에 컴포넌트에서 액션을 쉽게 발생시킬 수 있도록 만든 함수
export const plus = () => ({
  type: 'counter/PLUS',
});
export const minus = () => ({
  type: 'counter/MINUS',
});

// 초기값 정의
const initialState = {
  number: 0,
};

// reducer 정의 : action을 발생시키는 함수
const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'counter/PLUS':
      // Q. 왜 그냥 number:state.number+1 하지않고 객체형태로 내보내주는거지?
      // A. Redux에서 상태를 변경할 때, 기존 상태를 직접 수정하는 것이 아니라 새로운 상태 객체를 반환
      return { number: state.number + 1 };
    case 'counter/MINUS':
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default counterReducer;
