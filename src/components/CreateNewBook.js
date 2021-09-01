import React, { useState } from 'react';

const CreateNewBook = () => {
  const [books, setNewBook] = useState('');

  const addBook = (title) => {
    const newBook = [...books, { title }];
    setNewBook(newBook);
  };

  const getInput = () => {
    setNewBook('');
  };

  const HandleSub = (e) => {
    e.preventDefualt();
    addBook(books);
  };

  return (
    <div>
      <form className="form" onSubmit={HandleSub} action="#">
        <h1>ADD NEW BOOK</h1>
        <input className="input" type="text" onChange={(e) => getInput(e.target.value)} placeholder="Book title" />
        <input className="input-cat" type="text" placeholder="Book title" />
        <input className="submit" type="submit" value="Add Book" />
      </form>
    </div>
  );
};

export default CreateNewBook;
