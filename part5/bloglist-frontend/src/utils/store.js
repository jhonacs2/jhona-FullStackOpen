import { combineReducers, createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import userReducer from '../reducers/userReducer';
// import thunk from 'redux-thunk';

const reducer = combineReducers({
  user: userReducer,
});

const store = createStore(reducer, composeWithDevTools());

export default store;
