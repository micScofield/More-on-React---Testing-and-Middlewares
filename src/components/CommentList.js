import React, { Fragment } from 'react';
import { connect } from 'react-redux';

function CommentList({ savedComments }) {
  return (
    <Fragment>
      <h1>Comment List: </h1>
      <ul>
        {savedComments &&
          savedComments.length !== 0 &&
          savedComments.map((comment) => {
            return <li key={comment}>{comment}</li>;
          })}
      </ul>
    </Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    savedComments: state.comments.comments,
  };
};

export default connect(mapStateToProps, {})(CommentList);
