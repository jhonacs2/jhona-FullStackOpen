const notiReducer = (state = '', action) => {
  switch (action.type) {
    case 'ADD_NOTI': {
      return action.notification;
    }
    case 'HIDE_NOTI': {
      return action.notification;
    }
    default:
      return state;
  }
};

export const setNotification = (notification) => {
  return {
    type: 'ADD_NOTI',
    notification,
  };
};

export const hideNotification = () => {
  return {
    type: 'HIDE_NOTI',
    notification: '',
  };
};

export default notiReducer;
