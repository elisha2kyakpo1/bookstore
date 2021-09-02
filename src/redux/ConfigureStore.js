import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import ReduxThunk from 'redux-thunk';
import { books } from './books/Books';

const reducer = combineReducers({
  books,
});

const store = createStore(
  reducer,
  applyMiddleware(ReduxThunk, logger),
);

export default store;
