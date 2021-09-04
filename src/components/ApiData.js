import uniqid from 'uniqid';
import { addBook, fetchBooks, removeBook } from '../redux/books/Books';

const APP_ID = '0sCBow3akNF51bqmmqNy';
const USER_DATA_API = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}/books`;

const fetchBooksApi = () => {
  function arrayFormat(respObj) {
    const values = Object.values(respObj).map((item) => item[0]);
    return Object.keys(respObj).map((item, i) => ({ id: item, ...values[i] }));
  }

  return async function loadBooksThunk(dispatch) {
    fetch(USER_DATA_API)
      .then((response) => response.json())
      .then((json) => dispatch(fetchBooks(arrayFormat(json))));
  };
};

const addBookApi = (payload) => {
  const bookDetails = { ...payload, item_id: uniqid() };
  return async function addBookThunk(dispatch) {
    fetch(USER_DATA_API, {
      method: 'POST',
      body: JSON.stringify(bookDetails),
      headers: {
        'content-type': 'application/json',
      },
    }).then((response) => response.status === 201 && dispatch(addBook(bookDetails)));
  };
};

const removeBookApi = (id) => {
  const success = 'The book was deleted successfully!';
  return async function removeBookThunk(dispatch) {
    fetch(`${USER_DATA_API}${id.toString()}`, {
      method: 'DELETE',
      body: JSON.stringify({ item_id: id }),
      headers: {
        'content-type': 'application/json',
      },
    }).then((response) => response.text())
      .then((text) => text === success && dispatch(removeBook(id)));
  };
};

export {
  removeBookApi,
  addBookApi,
  fetchBooksApi,
};
