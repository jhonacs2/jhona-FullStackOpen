import userReducer from './userReducer';
import userIdService from '../services/user';
const userIdReducer = (state = '', action) => {
  switch (action.type) {
    case 'ID_USER':
      return action.user;

    default:
      return state;
  }
};

export const setIdUser = (id) => {
  return async (dispatch) => {
    const idUser = await userIdReducer.getAllUsers();
    console.log(idUser);
  };
};

export default userIdReducer;
