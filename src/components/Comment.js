import React, { PropTypes } from 'react';
import './Comment.css';
//http://stackoverflow.com/questions/22639534/pass-props-to-parent-component-in-react-js/31756470#31756470

const Comment = ({ handleUpdate, item }) => {
  const customerComment =
  <span>
    <h4>{item.author} says...</h4>
    <p>{item.body}</p>
  </span>;

  const techComment =
  <span>
    <h4>{item.author} says...</h4>
    <textArea className='editInputText' type='text' name="body" value={item.body} onChange={handleUpdate}/>
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
  handleUpdate: PropTypes.func.isRequired,
  item: PropTypes.shape({
    author: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired, // { customer | tech }
  }).isRequired,
};

export default Comment;
