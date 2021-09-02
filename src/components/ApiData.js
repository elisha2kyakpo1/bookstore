const APP_ID = '2bjHmEaEwufiiom45UAT';
const USER_DATA_API = `https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps${APP_ID}/books`;

const fetchBooksApi = async () => {
  const requestOptions = {
    method: 'GET',
    redirect: 'follow',
  };
  const result = await fetch(USER_DATA_API, requestOptions);
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
  const requestOptions = {
    method: 'POST',
    headers,
    body: newBook,
    redirect: 'follow',
  };
  const result = await fetch(USER_DATA_API, requestOptions);
  return result.status === 201;
};

const removeBookApi = async (id) => {
  const requestOptions = {
    method: 'DELETE',
    redirect: 'follow',
  };
  const response = await fetch(`${USER_DATA_API}${id}`, requestOptions);
  const result = await response.text();
  return result === 'The book was deleted successfully!';
};

export {
  removeBookApi,
  addBookApi,
  fetchBooksApi,
};
