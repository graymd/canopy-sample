import React, { PropTypes } from 'react';
import './Comment.css';

const Comment = ({ item }) => {
  return(
    <li
      className="Comment type"
    >
      <h4>{item.type === 'tech' ? `Technician` : `Customer`} - {item.author} says...</h4>
      <p>{item.body}</p>
    </li>
  );
}

Comment.propTypes = {
  item: PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired, // { customer | tech }
  }).isRequired,
};

export default Comment;
