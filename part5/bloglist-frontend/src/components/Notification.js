import React from 'react';
import { useSelector } from 'react-redux';

export const Notification = () => {
  const message = useSelector((state) => state.notification);

  if (message == null) {
    return null;
  }
  const notificationStyle = {
    color: 'blue',
    fontSize: ' 15px',
    borderStyle: 'solid',
    padding: '10px',
    width: '500px',
  };
  return (
    <div>
      <div style={notificationStyle} className='error'>
        {message}
      </div>
    </div>
  );
};
