import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookApi } from './ApiData';

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

  const handleClick = () => dispatch(removeBookApi(id));

  const progress = {
    backgroundImage: `conic-gradient(from 0deg, #307bbe, #379cf6 ${percentComplete}%, #e8e8e8 ${percentComplete}%, #e8e8e8)`,
    display: 'inline-block',
  };

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
                <button type="button" onClick={handleClick} data-bookid={id}>Remove</button>
                <button type="button">Edit</button>
              </div>
            </div>
            <div className="percent">
              <span className="circle" style={progress}> </span>
              <div>
                <h3>
                  {percentComplete}
                  %
                </h3>
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
  id: PropTypes.string,
  category: PropTypes.string,
  title: PropTypes.string.isRequired,
  author: PropTypes.string,
  percentComplete: PropTypes.number,
  chapter: PropTypes.string,
};

Book.defaultProps = {
  id: 1,
  category: '',
  author: '',
  percentComplete: 0,
  chapter: '',
};

export default Book;
