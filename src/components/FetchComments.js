import React, { Fragment } from 'react';
import { connect } from 'react-redux';

import { fetchComments } from 'store/actions'

const FetchComments = ({ fetchComments, fetchedComments }) => {
  const fetchCommentsHandler = () => {
    fetchComments()
  };

  return (
    <Fragment>
      <button className='fetch-comments' onClick={fetchCommentsHandler}>FetchComments</button>
        <h1>Fetched Comments: </h1>
      {fetchedComments &&
        fetchedComments.map((fetchedComment) => {
          return <li key={fetchedComment}>{fetchedComment}</li>;
        })}
    </Fragment>
  );
};

const mapStateToProps = (state) => {
    return {
      fetchedComments: state.comments.fetchedComments,
    };
  };

export default connect(mapStateToProps, { fetchComments })(FetchComments);
