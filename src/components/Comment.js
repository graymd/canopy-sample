import React, { PropTypes } from 'react';
import './Comment.css';

const Comment = ({
  removeComment,
  item }) => {
  return(
    <li
      className="Comment type"
    >
      <h4>{item.author} says...</h4>
      <p>{item.body}{item.type === 'tech' ? <button onClick={removeComment}>&times;</button> : 'no'}</p>
    </li>
  );
}

Comment.propTypes = {
  removeComment: PropTypes.func.isRequired,
  item: PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired, // { customer | tech }
  }).isRequired,
};

export default Comment;
