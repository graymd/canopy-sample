import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import Comment from '../components/Comment';
import { updateComment } from '../actions';

class Comments extends Component {
  handleUpdate(item, event) {
    const updatedComment = event.target.value;
    console.log('here');
    updateComment(item.id, updatedComment);
  }

  render() {
    const {
      className,
      items,
      updateComment
    } = this.props;

    return(
      <div className={`${className} Comments`}>
        <h3>Comments</h3>
        <ul>
          { map(items, item => <Comment handleUpdate={updateComment.bind(null, item.id)} item={item} key={item.id} />) }
        </ul>
      </div>
    );
  };
}

const mapStateToProps = (state, ownProps) => ({
  className: ownProps.className || "",
  items: state.comments,
});

const mapDispatchToProps = (dispatch) => ({
  updateComment: (itemId, event) => {
    dispatch(updateComment(itemId, {body: event.target.value}))
  }
});

Comments.propTypes = {
  className: PropTypes.string,
  items: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
