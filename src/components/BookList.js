import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

function BookList() {
  const books = useSelector((state) => state.books);
  return (
    <div className="book-list">
      { books.map((book) => {
        const {
          id, title, author, category, percentComplete,
        } = book;
        return (
          <Book
            key={id}
            id={id}
            title={title}
            author={author}
            cat={category}
            prog={percentComplete}
          />
        );
      }) }
    </div>
  );
}

export default BookList;
