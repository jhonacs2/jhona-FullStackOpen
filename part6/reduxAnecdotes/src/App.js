import React, { useEffect } from 'react';

import { AnecdoteForm } from './components/AnecdoteForm';
import { AnecdoteList } from './components/AnecdoteList';
import { Notification } from './components/Notification';
import { FilterAnecdote } from './components/FilterAnecdote';
import { useDispatch } from 'react-redux';
import AnecdoteServices from './services/anecdotes';

import { initAnecdote } from './reducers/anecdoteReducer';
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    AnecdoteServices.getAllAnecdotes().then((anecdotes) =>
      dispatch(initAnecdote(anecdotes))
    );
  });
  return (
    <div>
      <h2>Anecdotes</h2>
      <FilterAnecdote />
      <Notification />
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  );
};

export default App;
