import React from 'react';

import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';

export default function App() {
  return (
    <div>
      <CommentBox />
      <h1>Comment List: </h1>
      <CommentList />
    </div>
  );
}
