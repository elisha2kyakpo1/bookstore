import React from 'react';
import PropTypes from 'prop-types';
import CreateNewBook from '../../components/CreateNewBook';
import Book from './Book';

const Books = (props) => {
  const bookList = [
    {
      title: 'The Hunger Game',
      author: 'suzane collins',
      percentComplete: '64%',
      chapter: 'Chapter 17',
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
      percentComplete: '8%',
      chapter: 'Chapter 3: "A lesson learned"',
    },
    {
      title: 'Capital in the Twenty-First Century',
      author: 'suzane collins',
      percentComplete: '0%',
      chapter: 'Introduction',
    },
  ];

  return (
    <div className="booklist">
      {bookList.map((book) => (
        <Book key={props.title} title={book.title} author={book.author} />
      ))}
      <CreateNewBook />
    </div>
  );
};

Books.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Books;
