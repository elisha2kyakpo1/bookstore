const APP_ID = '2bjHmEaEwufiiom45UAT';
const USER_DATA_API = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/${APP_ID}/books`;

const fetchBooksApi = async () => {
  const result = await fetch(USER_DATA_API, {
    method: 'GET',
  });
  try {
    const books = await result.json();
    return books;
  } catch (error) {
    return {};
  }
};

const addBookApi = async (book) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');
  const newBook = JSON.stringify(book);
  const options = {
    method: 'POST',
    headers,
    body: newBook,
  };
  const result = await fetch(USER_DATA_API, options);
  return result.status === 201;
};

const removeBookApi = async (id) => {
  const options = {
    method: 'DELETE',
  };
  const response = await fetch(`${USER_DATA_API}${id}`, options);
  const result = await response.text();
  return result === 'The book was deleted successfully!';
};

export {
  removeBookApi,
  addBookApi,
  fetchBooksApi,
};
