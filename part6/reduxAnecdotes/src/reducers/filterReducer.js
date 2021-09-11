const filterReducer = (state = '', action) => {
  switch (action.type) {
    case 'HANDLE_INPUT': {
      return action.filter;
    }
    default:
      return state;
  }
};

export const setInput = (filter) => {
  return {
    type: 'HANDLE_INPUT',
    filter,
  };
};

export default filterReducer;
