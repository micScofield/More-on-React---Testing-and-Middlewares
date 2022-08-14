import React from 'react';
import { connect } from 'react-redux';

function CommentList({ savedComments }) {
  return (
      <ul>
      { savedComments && savedComments.length !== 0 && savedComments.map(comment => {
        return <li key={comment}>
          {comment}
        </li>
      })}
      </ul>
  );
}

const mapStateToProps = (state) => {
  return {
    savedComments: state.savedComments.comments,
  };
};

export default connect(mapStateToProps, { })(CommentList);
