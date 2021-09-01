import React from 'react';
import PropTypes from 'prop-types';

const Book = (props) => {
  const {
    title,
    author,
    percentComplete,
    chapter,
  } = props;

  return (
    <div>
      <div className="book">
        <div>
          <div
            className="books"
            key={title}
          >
            <div className="title-section">
              <div>
                <h4>Action</h4>
                <h2>{title}</h2>
                <h4>{author}</h4>
              </div>
              <div className="action-buttons">
                <span>Comments</span>
                <span>Remove</span>
                <span>Edit</span>
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
  title: PropTypes.string.isRequired,
  chapter: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  percentComplete: PropTypes.number.isRequired,
};

export default Book;
