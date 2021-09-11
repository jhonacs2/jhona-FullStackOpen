import React from 'react';

import { AnecdoteForm } from './components/AnecdoteForm';
import { AnecdoteList } from './components/AnecdoteList';
import { Notification } from './components/Notification';
import { FilterAnecdote } from './components/FilterAnecdote';
const App = () => {
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
