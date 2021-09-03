import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookApi } from './ApiData';

const Book = (props) => {
  const {
    id,
    cat,
    title,
    author,
    prog,
    chapter,
  } = props;

  const dispatch = useDispatch();

  const handleClick = () => dispatch(removeBookApi(id));

  const progress = {
    backgroundImage: `conic-gradient(from 0deg, #307bbe, #379cf6 ${prog}%, #e8e8e8 ${prog}%, #e8e8e8)`,
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
                <h4>{cat}</h4>
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
                  {prog}
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
  id: PropTypes.number,
  cat: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  prog: PropTypes.number,
  chapter: PropTypes.string,
};

Book.defaultProps = {
  id: 1,
  cat: '',
  title: '',
  author: '',
  prog: 0,
  chapter: '',
};

export default Book;
