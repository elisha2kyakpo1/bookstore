const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const LOAD_BOOKS = 'bookstore/books/LOAD_BOOKS';
const APP_ID = '0sCBow3akNF51bqmmqNy';

const defaultState = [];

export default function books(state = defaultState, action) {
  switch (action.type) {
    case LOAD_BOOKS:
      return action.payload.map((bookObject) => ({ ...bookObject, author: 'Suzanne Collins', progress: 64 }));
    case ADD_BOOK:
      return state.concat({
        id: action.payload.item_id,
        title: action.payload.title,
        author: 'Suzanne Collins',
        category: action.payload.category,
        progress: 64,
      });
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.payload);
    default:
      return state;
  }
}

function loadBooks(payload) {
  return {
    type: LOAD_BOOKS,
    payload,
  };
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

export function addBookAPI(payload) {
  const bookDetails = { ...payload, item_id: Date.now() };
  return async function addBookThunk(dispatch) {
    fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}/books`, {
      method: 'POST',
      body: JSON.stringify(bookDetails),
      headers: {
        'content-type': 'application/json',
      },
    }).then((response) => response.status === 201 && dispatch(addBook(bookDetails)));
  };
}

export function loadBooksAPI() {
  function arrayFormat(respObj) {
    const values = Object.values(respObj).map((item) => item[0]);
    return Object.keys(respObj).map((item, i) => ({ id: Number(item), ...values[i] }));
  }

  return async function loadBooksThunk(dispatch) {
    fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}/books`)
      .then((response) => response.json())
      .then((json) => dispatch(loadBooks(arrayFormat(json))));
  };
}

export function removeBookAPI(id) {
  const success = 'The book was deleted successfully!';
  return async function removeBookThunk(dispatch) {
    fetch(`https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}/books/${id.toString()}`, {
      method: 'DELETE',
      body: JSON.stringify({ item_id: id.toString() }),
      headers: {
        'content-type': 'application/json',
      },
    }).then((response) => response.text())
      .then((text) => text === success && dispatch(removeBook(id)));
  };
}
