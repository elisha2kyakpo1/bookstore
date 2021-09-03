import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

function BookList() {
  const books = useSelector((state) => state.booksLoaded);
  return (
    <div className="book-list">
      { books.map((book) => {
        const {
          id, title, author, category, percentComplete, chapter,
        } = book;
        return (
          <Book
            key={id}
            id={id}
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
