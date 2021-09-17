import React from 'react';
import { connect } from 'react-redux';
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

const AnecdoteList = (props) => {
  // const anecdotesRedux = useSelector(({ anecdotes,filter }) =>
  //   anecdotes.sort((a, b) => {
  //     return b.votes - a.votes;
  //   })
  // );

  // const anecdotesRedux = () => {
  //   if (props.filter === '') {
  //     return props.anecdotes.sort((a, b) => {
  //       return b.votes - a.votes;
  //     });
  //   } else {
  //     const filterAnecdotes = props.anecdotes.filter((anecdote) =>
  //       anecdote.content.toLowerCase().includes(props.filter.toLowerCase())
  //     );

  //     return filterAnecdotes.sort((a, b) => b.votes - a.votes);
  //   }
  // };

  const vote = (anecdote) => {
    props.voteAnecdote(anecdote);
  };
  return (
    <ul>
      {props.anecdotes.map((anecdote) => (
        <Anecdote
          key={anecdote.id}
          anecdote={anecdote}
          vote={() => vote(anecdote)}
        />
      ))}
    </ul>
  );
};

const mapStateProps = (state) => {
  if (state.filter === '') {
    const orderAnecdotes = state.anecdotes.sort((a, b) => {
      return b.votes - a.votes;
    });
    return {
      anecdotes: orderAnecdotes,
    };
  } else {
    const filterAnecdotes = state.anecdotes.filter((anecdote) =>
      anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
    );
    const orderFilterAnecdotes = filterAnecdotes.sort(
      (a, b) => b.votes - a.votes
    );
    return {
      anecdotes: orderFilterAnecdotes,
    };
  }
};

const mapDispatchToProps = {
  voteAnecdote,
};

const connectedAnecdotes = connect(
  mapStateProps,
  mapDispatchToProps
)(AnecdoteList);

export default connectedAnecdotes;
