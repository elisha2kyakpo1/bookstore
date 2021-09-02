import React from 'react';
import BookList from './BookList';
import CreateNewBook from './CreateNewBook';

function Books() {
  return (
    <div className="form">
      <BookList />
      <CreateNewBook />
    </div>
  );
}

export default Books;
