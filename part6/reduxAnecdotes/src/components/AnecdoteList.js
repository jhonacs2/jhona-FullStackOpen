import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { voteAnecdote } from '../reducers/anecdoteReducer';

const Anecdote = ({ anecdote, vote }) => {
  return (
    <li key={anecdote.id}>
      <div>{anecdote.content}</div>
      <div>
        has {anecdote.votes}
        <button onClick={vote}>vote</button>
      </div>
    </li>
  );
};

export const AnecdoteList = () => {
  const anecdotes = useSelector((state) =>
    state.sort((a, b) => {
      return b.votes - a.votes;
    })
  );
  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(voteAnecdote(id));
  };
  return (
    <ul>
      {anecdotes.map((anecdote) => (
        <Anecdote anecdote={anecdote} vote={() => vote(anecdote.id)} />
      ))}
    </ul>
  );
};
