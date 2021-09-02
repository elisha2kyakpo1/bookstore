const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';

const defaultState = [];

function Books(state = defaultState, action) {
  switch (action.type) {
    case ADD_BOOK:
      return state.concat({
        id: Date.now(),
        title: action.payload.title,
        author: action.payload.author,
        category: action.payload.category,
        progress: 0,
      });
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}

function addBook(payload) {
  return {
    type: ADD_BOOK,
    payload,
  };
}

function removeBook(payload) {
  return {
    type: REMOVE_BOOK,
    payload,
  };
}

export {
  Books,
  removeBook,
  addBook,
};
