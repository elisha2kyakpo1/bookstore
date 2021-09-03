import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeBookApi } from './ApiData';

const Book = ({
  id,
  cat,
  title,
  author,
  prog,
}) => {
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
                <h4 className="cat">{cat}</h4>
                <h2 className="title">{title}</h2>
                <h4 className="author">{author}</h4>
              </div>
              <div className="action-buttons">
                <button type="button">Comments</button>
                <button type="button" onClick={handleClick} data-bookid={id}>Remove</button>
                <button type="button">Edit</button>
              </div>
            </div>
            <div className="percent">
              <span className="circle" style={progress}>
                <div className="inner"> </div>
              </span>
              <div className="progress-contain">
                <h3>
                  {prog}
                  %
                </h3>
                <p>Completed</p>
              </div>
            </div>
            <div className="border"> </div>
            <div className="current-div">
              <h4 className="current">Current Chapter</h4>
              <h2 className="chapter">Chapter 17</h2>
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
  cat: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  prog: PropTypes.number,
};

Book.defaultProps = {
  id: 'kt3988z7',
  cat: 'Action',
  title: 'Good afternoon, I will get back to you',
  author: 'Elisha kyakopo',
  prog: 66,
};

export default Book;
