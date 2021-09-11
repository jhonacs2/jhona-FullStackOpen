import { combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import AnecdoteReducer from '../reducers/anecdoteReducer';
import notiReducer from '../reducers/notificationReducer';
import filterReducer from '../reducers/filterReducer';

const reducer = combineReducers({
  anecdotes: AnecdoteReducer,
  notification: notiReducer,
  filter: filterReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
