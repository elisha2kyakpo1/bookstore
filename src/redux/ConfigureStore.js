import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { booksLoaded } from './books/Books';

const reducer = combineReducers({
  booksLoaded,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk, logger),
);

export default store;
