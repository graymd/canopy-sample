import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';
import Comment from '../components/Comment';
import { removeComment } from '../actions';

class Comments extends Component {
  render() {
    const {
      className,
      items,
      removeComment,
    } = this.props;

    return(
      <div className={`${className} Comments`}>
        <h3>Comments</h3>
        <ul>
          { map(items, item => <Comment removeComment={removeComment.bind(null, item.id)} item={item} key={item.id} />) }
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
  removeComment: (id) => {
    dispatch(removeComment(id))
  }
})

Comments.propTypes = {
  className: PropTypes.string,
  items: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Comments);
