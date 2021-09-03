import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBooksApi } from './ApiData';
import Book from './Book';
import CreateNewBook from './CreateNewBook';

function renderBooks() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);

  useEffect(() => {
    dispatch(fetchBooksApi());
  }, []);
  return (
    <div className="render">
      <Book books={books} />
      <CreateNewBook />
    </div>
  );
}

export default renderBooks;
