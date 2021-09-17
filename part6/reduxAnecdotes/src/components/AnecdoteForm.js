import React from 'react';
import { connect, useDispatch } from 'react-redux';
import { createAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteForm = (props) => {
  const dispatch = useDispatch();

  const addNote = async (event) => {
    event.preventDefault();
    const content = event.target.anecdote.value;
    event.target.anecdote.value = '';
    // const newAnecdote = await AnecdoteServices.createAnecdote(content);

    dispatch(createAnecdote(content));
    dispatch(setNotification(`you voted ${content}`, 5));
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
const connectedAnecdotes = connect(null, { createAnecdote })(AnecdoteForm);

export default connectedAnecdotes;
