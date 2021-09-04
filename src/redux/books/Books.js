const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOKS = 'bookstore/books/REMOVE_BOOK';

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const removeBook = (payload) => ({
  type: REMOVE_BOOK,
  payload,
});

const fetchBooks = (payload) => ({
  type: GET_BOOKS,
  payload,
});

function books(state = [], action) {
  switch (action.type) {
    case GET_BOOKS:
      return action.payload.map((bookObject) => ({ ...bookObject, author: 'Suzanne Collins', percentComplete: 65 }));
    case ADD_BOOK:
      return state.concat({
        id: action.payload.item_id,
        title: action.payload.title,
        author: 'Suzanne Collins',
        category: action.payload.category,
        percentComplete: 65,
      });
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}

export {
  books,
  removeBook,
  addBook,
  fetchBooks,
};
