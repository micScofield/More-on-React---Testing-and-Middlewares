import React, { useState } from 'react';
import { connect } from 'react-redux';

import { commentBoxFormSubmit } from 'store/actions';
import requireAuth from 'components/HOC/requireAuth';

function CommentBox({ commentBoxFormSubmit }) {
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
      <textarea value={comment} onChange={(e) => handleChange(e)} /><br />
      <button action='submit'>Submit Comment</button>
    </form>
  );
}

const mapStateToProps = state => { return {} }

export default connect(mapStateToProps, { commentBoxFormSubmit })(requireAuth(CommentBox));
