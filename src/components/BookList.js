import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function BookList({ books }) {
  return (
    <div className="book-list">
      { books.map((book) => {
        const {
          title, author, category, percentComplete,
        } = book;
        return (
          <Book
            key={category}
            cat={category}
            title={title}
            author={author}
            prog={percentComplete}
          />
        );
      }) }
    </div>
  );
}

BookList.propTypes = {
  books: PropTypes.arrayOf(Book),
};

BookList.defaultProps = {
  books: [],
};

export default BookList;
