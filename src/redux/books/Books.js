import {
  fetchBooksApi,
  removeBookApi,
  addBookApi,
} from '../../components/ApiData';

const ADD_BOOK = 'bookstore/books/ADD_BOOK';
const REMOVE_BOOK = 'bookstore/books/REMOVE_BOOK';
const GET_BOOK = 'bookstore/books/REMOVE_BOOK';

const addBook = (payload) => ({
  type: ADD_BOOK,
  payload,
});

const removeBook = (id) => ({
  type: REMOVE_BOOK,
  id,
});

const fetchBooks = (payload) => ({
  type: GET_BOOK,
  payload,
});

export const getBooks = () => async (dispatch) => {
  const books = await fetchBooksApi();
  if (books) {
    dispatch(fetchBooks(books));
  }
};

export const createBook = (book) => async (dispatch) => {
  const bookCreated = await addBookApi(book);
  if (bookCreated) {
    dispatch(addBook(book));
  }
};

export const deleteBook = (id) => async (dispatch) => {
  const bookDeleted = await removeBookApi(id);
  if (bookDeleted) {
    dispatch(removeBook(id));
  }
};

const books = (state = [], action) => {
  const authors = ['Stephen Jodan', 'Elisha martin', 'Winnie more', 'Stephen King', 'Albert Jordan'];
  const chapter = ['Introduction', 'Chapter 1', 'Chapter 2', 'Chapter 3', 'Chapter 4', 'Chapter 5'];
  switch (action.type) {
    case ADD_BOOK:
      return [...state, {
        ...action.payload,
        author: authors[Math.floor(Math.random() * authors.length)],
        percentComplete: Math.floor(Math.random() * 100),
        chapter: chapter[Math.floor(Math.random() * chapter.length)],
      }];
    case REMOVE_BOOK:
      return state.filter((book) => book.id !== action.id);
    case GET_BOOK: {
      const loadedBooks = Object.entries(action.payload).map(([key, value]) => {
        const [book] = value;
        return {
          id: key,
          ...book,
          author: authors[Math.floor(Math.random() * authors.length)],
          percentComplete: Math.floor(Math.random() * 100),
          chapter: chapter[Math.floor(Math.random() * chapter.length)],
        };
      });

      return loadedBooks;
    }
    default:
      return state;
  }
};

export {
  books,
  removeBook,
  addBook,
};
