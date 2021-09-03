import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBooksApi } from './ApiData';
import Book from './Book';

function BookList() {
  const books = useSelector((state) => state.books);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooksApi());
  }, []);
  return (
    <div className="book-list">
      { books.map((book) => {
        const {
          title, author, category, percentComplete, chapter,
        } = book;
        return (
          <Book
            key={category}
            cat={category}
            title={title}
            author={author}
            chapter={chapter}
            prog={percentComplete}
          />
        );
      }) }
    </div>
  );
}

export default BookList;
