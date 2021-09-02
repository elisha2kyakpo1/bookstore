import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { createBook } from '../redux/books/Books';

function CreateNewBook() {
  const categories = ['Development', 'Java', 'JavaScript', 'Chemical', 'LifeStyle'];

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleSub = (e) => {
    e.preventDefault();
    if (title && category) {
      dispatch(createBook({ item_id: uniqid(), title, category }));
      setTitle('');
      setCategory(categories[0]);
      e.target.reset();
    }
  };

  return (
    <div className="form">
      <h2>Add NEW BOOK</h2>
      <form onSubmit={handleSub}>
        <input className="input" type="text" name="title" placeholder="Book title" onChange={(title) => setTitle(title.target.value)} />
        <select className="selection" name="category" onChange={(category) => setCategory(category.target.value)}>
          {categories.map((category) => (
            <option key={category} value={category}>{category}</option>
          ))}
        </select>
        <button type="submit" className="submit">ADD BOOK</button>
      </form>
    </div>
  );
}

export default CreateNewBook;
