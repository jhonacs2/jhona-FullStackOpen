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
  // const anecdotesRedux = useSelector(({ anecdotes,filter }) =>
  //   anecdotes.sort((a, b) => {
  //     return b.votes - a.votes;
  //   })
  // );

  const anecdotesRedux = useSelector(({ anecdotes, filter }) => {
    if (filter === '') {
      return anecdotes.sort((a, b) => {
        return b.votes - a.votes;
      });
    } else {
      const filterAnecdotes = anecdotes.filter((anecdote) =>
        anecdote.content.toLowerCase().includes(filter.toLowerCase())
      );

      return filterAnecdotes.sort((a, b) => b.votes - a.votes);
    }
  });

  const dispatch = useDispatch();

  const vote = (id) => {
    dispatch(voteAnecdote(id));
  };
  return (
    <ul>
      {anecdotesRedux.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          vote={() => vote(anecdote.id)}
        />
      ))}
    </ul>
  );
};
