import React, { PropTypes } from 'react';
import './Comment.css';

//currently attempting to edit comment from tech - handleChange
// receives the change from the input correctly
function handleChange(e, id) {
  console.log(e.target.value);
}

const Comment = ({ item }) => {
  const customerComment =
  <span>
    <h4>{item.author} says...</h4>
    <p>{item.body}</p>
  </span>;

  const techComment =
  <span>
    <h4>{item.author} says...</h4>
    <textArea className='editInputText' type='text' name="body" value={item.body} onChange={(e) => handleChange(e, item.id)}/>
  </span>;

  return(
    <li
      className="Comment type"
    >
      {item.type === 'tech' ? techComment : customerComment}
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
