let identificador;

export const notificationReducer = (state = null, action) => {
  switch (action.type) {
    case 'SHOW_NOTIFICATION':
      console.log(action.notification);
      return action.notification;
    case 'HIDE_NOTIFICATION':
      return action.notification;
    default:
      return state;
  }
};

export const setNotification = (notification, time) => {
  return async (dispatch) => {
    clearTimeout(identificador);
    dispatch({
      type: 'SHOW_NOTIFICATION',
      notification,
    });
    identificador = setTimeout(() => {
      dispatch({
        type: 'HIDE_NOTIFICATION',
        notification: null,
      });
    }, time * 1000);
  };
};

export default notificationReducer;
