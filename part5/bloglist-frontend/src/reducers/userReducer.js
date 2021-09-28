const userReducer = (state = null, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return action.user;

    default:
      return state;
  }
};

export const setUserLogin = (user) => {
  return {
    type: 'LOGIN_USER',
    user,
  };
};

export default userReducer;
