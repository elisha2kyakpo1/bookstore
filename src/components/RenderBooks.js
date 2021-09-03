// import React, { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { fetchBooksApi } from './ApiData';
import Book from './Book';
import CreateNewBook from './CreateNewBook';

function renderBooks() {
  return (
    <div className="render">
      <Book />
      <CreateNewBook />
    </div>
  );
}

export default renderBooks;
