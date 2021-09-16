import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setInput } from '../reducers/filterReducer';

export const FilterAnecdote = () => {
  const filter = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  const handleChange = (event) => {
    const content = event.target.value;
    dispatch(setInput(content));
  };
  const style = {
    marginBottom: 10,
  };

  return (
    <div style={style}>
      filter <input name='filter' onChange={handleChange} value={filter} />
    </div>
  );
};
