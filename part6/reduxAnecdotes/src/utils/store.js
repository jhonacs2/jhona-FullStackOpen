import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import AnecdoteReducer from '../reducers/anecdoteReducer';
import notiReducer from '../reducers/notificationReducer';
import filterReducer from '../reducers/filterReducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  anecdotes: AnecdoteReducer,
  notification: notiReducer,
  filter: filterReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
