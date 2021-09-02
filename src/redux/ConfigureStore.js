import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Books } from './books/Books';

const reducer = combineReducers({
  Books,
});

const store = createStore(
  reducer,
  applyMiddleware(logger),
);

export default store;
