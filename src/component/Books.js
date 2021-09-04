import React from 'react';
import AddBookForm from './AddBookForm';
import BookList from './BookList';
import './Books.css';

function Books() {
  return (
    <div>
      <BookList />
      <div className="line" />
      <AddBookForm />
    </div>
  );
}

export default Books;
