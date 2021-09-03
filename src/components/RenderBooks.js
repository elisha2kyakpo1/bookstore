import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getBooks } from '../redux/books/Books';
import BookList from './BookList';
import CreateNewBook from './CreateNewBook';

function renderBooks() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(getBooks());
  }, []);
  return (
    <div className="render">
      <BookList book={books} />
      <CreateNewBook />
    </div>
  );
}

export default renderBooks;
