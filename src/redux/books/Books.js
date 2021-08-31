import React, { useState } from 'react';

const Books = () => {
  const [books, setBook] = useState([
    {
      title: 'The Hunger Game',
      author: 'suzane collins',
    },
    {
      title: 'Dune',
      author: 'Frank Herbert',
    },
    {
      title: 'Capital in the Twenty-First Century',
      author: 'suzane collins',
    },
  ]);

  const addBook = (title, author) => {
    const newBook = [...books, { title }, { author }];
    setBook(newBook);
  };

  const HandleSub = (e) => {
    e.preventDefault();
    if (!books) {
      addBook(books);
      setBook('');
    }
  };

  return (
    <div className="booklist">
      <div className="book">
        <div>
          {
            books.map((book) => (
              <div
                className="books"
                key={book.title}
              >
                <h4>Action</h4>
                <div>
                  <h2>{book.title}</h2>
                  <h4>{book.author}</h4>
                </div>
                <div>
                  <div className="circle"> </div>
                </div>
              </div>
            ))
          }
        </div>
        {/* <AddBook addBook={addBook} /> */}
      </div>
      <form className="form" onSubmit={HandleSub} action="#">
        <h1>ADD NEW BOOK</h1>
        <input className="input" type="text" onChange={(e) => setBook(e.target.value)} placeholder="Book title" />
      </form>
    </div>
  );
};

export default Books;
