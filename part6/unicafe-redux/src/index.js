import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import reducer from './reducer';

const store = createStore(reducer);

const App = () => {
  const good = () => {
    store.dispatch({
      type: 'GOOD',
    });
  };

  const okButton = () => {
    store.dispatch({
      type: 'OK',
    });
  };

  const badButton = () => {
    store.dispatch({
      type: 'BAD',
    });
  };

  const reset = () => {
    store.dispatch({
      type: 'ZERO',
    });
  };

  return (
    <div>
      <button onClick={good}>good</button>
      <button onClick={okButton}>neutral</button>
      <button onClick={badButton}>bad</button>
      <button onClick={reset}>reset stats</button>
      <div>good {store.getState().good}</div>
      <div>neutral {store.getState().ok}</div>
      <div>bad {store.getState().bad}</div>
    </div>
  );
};

const renderApp = () => {
  ReactDOM.render(<App />, document.getElementById('root'));
};

renderApp();
store.subscribe(renderApp);
