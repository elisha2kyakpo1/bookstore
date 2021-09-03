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

const booksLoaded = (state = [], action) => {
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
    case GET_BOOK:
      return action.payload.map((bookObject) => ({ ...bookObject, progress: 74 }));
    default:
      return state;
  }
};

export {
  booksLoaded,
  removeBook,
  addBook,
  fetchBooks,
};
