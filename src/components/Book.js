import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBook } from '../redux/books/Books';

const Book = (props) => {
  const {
    id,
    category,
    title,
    author,
    percentComplete,
    chapter,
  } = props;

  const dispatch = useDispatch();

  function handleClick(e) {
    const payload = Number(e.target.dataset.bookId);
    dispatch(removeBook(payload));
  }

  return (
    <div>
      <div className="book">
        <div>
          <div
            className="books"
            key={id}
          >
            <div className="title-section">
              <div>
                <h4>{category}</h4>
                <h2>{title}</h2>
                <h4>{author}</h4>
              </div>
              <div className="action-buttons">
                <button type="button">Comments</button>
                <button type="button" onClick={handleClick} data-bookId={id}>Remove</button>
                <button type="button">Edit</button>
              </div>
            </div>
            <div className="percent">
              <div className="circle"> </div>
              <div>
                <h3>{percentComplete}</h3>
                <p>Completed</p>
              </div>
            </div>

            <div>
              <h4>Current Chapter</h4>
              <h2>{chapter}</h2>
              <button className="update-progress" type="button">UPDATE PROGRESS</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Book.propTypes = {
  id: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  percentComplete: PropTypes.number.isRequired,
};

export default Book;
