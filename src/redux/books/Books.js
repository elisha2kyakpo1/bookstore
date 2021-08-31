import React, { useState } from 'react';

const Books = () => {
  const [books, setBook] = useState([
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
  ]);

  const addBook = (title) => {
    const newBook = [...books, { title }];
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
                <div className="title-section">
                  <div>
                    <h4>Action</h4>
                    <h2>{book.title}</h2>
                    <h4>{book.author}</h4>
                  </div>
                  <div className="action-buttons">
                    <span type="button">Comments</span>
                    <span type="button">Remove</span>
                    <span type="button">Edit</span>
                  </div>
                </div>
                <div className="percent">
                  <div className="circle"> </div>
                  <div>
                    <h3>{book.percentComplete}</h3>
                    <p>Completed</p>
                  </div>
                </div>

                <div>
                  <h4>Current Chapter</h4>
                  <h2>{book.chapter}</h2>
                  <button className="update-progress" type="button">UPDATE PROGRESS</button>
                </div>
              </div>
            ))
          }
        </div>
      </div>
      <form className="form" onSubmit={HandleSub} action="#">
        <h1>ADD NEW BOOK</h1>
        <input className="input" type="text" onChange={(e) => addBook(e.target.value)} placeholder="Book title" />
        <input className="input-cat" type="text" placeholder="Book title" />
        <input className="submit" type="submit" value="Add Book" />
      </form>
    </div>
  );
};

export default Books;
