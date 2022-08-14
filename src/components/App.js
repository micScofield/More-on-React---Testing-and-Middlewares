import React from 'react';

import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';
import FetchComments from 'components/FetchComments';

export default function App() {
  return (
    <div>
      <CommentBox />
      <FetchComments />
      <h1>Comment List: </h1>
      <CommentList />
    </div>
  );
}
