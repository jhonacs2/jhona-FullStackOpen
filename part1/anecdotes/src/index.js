import React, { useState } from 'react';
import ReactDOM, { render } from 'react-dom';

const Display = ({ points, anecdotes }) => {
  const max = Math.max(...points);
  const position = points.indexOf(max);
  return (
    <>
      <h1>{anecdotes[position]}</h1>
    </>
  );
};

const App = (props) => {
  const [selected, setSelected] = useState(0);
  const [points, setPoints] = useState(new Array(5).fill(0));

  const randomNumber = () => {
    const random = Math.floor(Math.random() * 5);
    setSelected(random);
  };

  const suma = () => {
    const copy = [...points];
    console.log(copy);
    copy[selected] += 1;
    setPoints(copy);
  };

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{props.anecdotes[selected]}</p>
      <br />
      <button onClick={() => randomNumber()}>next anecdote</button>
      <button onClick={() => suma()}>Vote</button>
      <h2>Anecdote with most votes</h2>
      <Display points={points} anecdotes={props.anecdotes} />
    </div>
  );
};

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
];

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'));
