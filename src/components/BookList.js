import React from 'react';
import { useSelector } from 'react-redux';
import Book from './Book';

function BookList() {
  const books = useSelector((state) => state.books);
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
