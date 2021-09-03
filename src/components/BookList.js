import React from 'react';
import PropTypes from 'prop-types';
import Book from './Book';

function BookList({ book }) {
  return (
    <div className="book-list">
      { book.map((book) => {
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
  book: PropTypes.arrayOf(Book),
};

BookList.defaultProps = {
  book: [],
};

export default BookList;
