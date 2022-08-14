import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';
import FetchComments from 'components/FetchComments';

export default function App() {
  return (
    <div>

      <div className='navigation-bar'>
        <Link to='/'>Home</Link><br />
        <Link to='/post'>Post</Link><br />
        <Link to='/fetch'>Fetch</Link>
      </div>

      <Switch>
        <Route path='/post' exact component={CommentBox} />
        <Route path='/fetch' exact component={FetchComments} />
        <Route path='/' component={CommentList} />
      </Switch>
    </div>
  );
}
