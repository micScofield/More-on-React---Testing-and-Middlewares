import React, { useState } from 'react';
import { connect } from 'react-redux';

import { commentBoxFormSubmit } from 'store/actions';

function CommentBox({ commentBoxFormSubmit, savedComment }) {
  const [comment, setComment] = useState('');

  const handleChange = (e) => {
    setComment(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // dispatching action
    commentBoxFormSubmit(comment);

    setComment('');
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className='comment-box'>
      <textarea value={comment} onChange={(e) => handleChange(e)} />
      <button action='submit'>Submit Comment</button>
      <p>Saved Comment: {savedComment && savedComment}</p>
    </form>
  );
}

const mapStateToProps = (state) => {
  return {
    savedComment: state.savedComment.comment,
  };
};

export default connect(mapStateToProps, { commentBoxFormSubmit })(CommentBox);
