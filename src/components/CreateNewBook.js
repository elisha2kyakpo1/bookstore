import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import uniqid from 'uniqid';
import { addBookApi } from './ApiData';

function CreateNewBook() {
  const categories = ['Development', 'Software', 'Mechanical', 'Chemical', 'LifeStyle'];

  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState(categories[0]);

  const handleSub = (e) => {
    e.preventDefault();
    if (title && category) {
      dispatch(addBookApi({ item_id: uniqid(), title, category }));
      setTitle('');
      setCategory(categories[0]);
      e.target.reset();
    }
  };

  return (
    <div className="form">
      <div>
        <h2 className="add-book">Add NEW BOOK</h2>
        <form onSubmit={handleSub}>
          <input className="input" type="text" name="title" placeholder="Book title" onChange={(title) => setTitle(title.target.value)} />
          <select className="selection" name="category" onChange={(category) => setCategory(category.target.value)}>
            {categories.map((category) => (
              <option className="options" key={category} value={category}>{category}</option>
            ))}
          </select>
          <button type="submit" className="submit">ADD BOOK</button>
        </form>
      </div>
    </div>
  );
}

export default CreateNewBook;
