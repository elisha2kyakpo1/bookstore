import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAPI } from '../components/Book';
import './AddBookForm.css';

function AddBookForm() {
  const dispatch = useDispatch();
  const [formState, setFormState] = useState({ title: '', category: 'Category' });

  function handleChange(e) {
    setFormState({ ...formState, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    dispatch(addBookAPI(formState));
    e.preventDefault();
    setFormState({
      ...formState, title: '', category: 'Category',
    });
  }

  return (
    <div className="form-container">
      <h2 className="form-title">Add NEW BOOK</h2>
      <form onSubmit={handleSubmit} className="inner-form-container">
        <input type="text" name="title" placeholder="Book title" value={formState.title} onChange={handleChange} className="book-input" />
        <select name="category" value={formState.category} onChange={handleChange} className="cat-input">
          <option value="" hidden>Category</option>
          <option value="Sci-Fi">Sci-Fi</option>
          <option value="Action">Action</option>
          <option value="Action">Economy</option>
        </select>
        <button type="submit" className="add-btn">ADD BOOK</button>
      </form>
    </div>
  );
}

export default AddBookForm;
