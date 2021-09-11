import React from 'react';
import { useSelector } from 'react-redux';

export const Notification = () => {
  const state = useSelector((state) => state.notification);

  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
  };
  if (state === '') {
    return null;
  }

  return <div style={style}>Anecdote "{state}" Added</div>;
};
