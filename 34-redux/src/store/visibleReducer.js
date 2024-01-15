const initialState = {
  //   isVisible: '참',
  isVisible: true,
};

function visibleReducer(state = initialState, action) {
  //   return action.type === '참' ? { isVisible: '거짓' } : { isVisible: '참' };
  if (action.type === 'isvisible/change') {
    return { isVisible: !state.isVisible.isVisible };
  }
  return { isVisible: state };
}

export default visibleReducer;
