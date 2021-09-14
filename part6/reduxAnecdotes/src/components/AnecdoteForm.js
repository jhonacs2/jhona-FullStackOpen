import React from 'react';
import { useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import {
  hideNotification,
  setNotification,
} from '../reducers/notificationReducer';
import AnecdoteServices from '../services/anecdotes';

export const AnecdoteForm = (props) => {
  const dispatch = useDispatch();

  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    const newAnecdote = await AnecdoteServices.createAnecdote(content);
    console.log(newAnecdote);
    dispatch(createAnecdote(newAnecdote));
    dispatch(setNotification(content));

    setTimeout(() => {
      dispatch(hideNotification());
    }, 5000);
  };
  return (
    <div>
      <h2>create new</h2>
      <form onSubmit={addNote}>
        <div>
          <input name='anecdote' />
        </div>
        <button>create</button>
      </form>
    </div>
  );
};
