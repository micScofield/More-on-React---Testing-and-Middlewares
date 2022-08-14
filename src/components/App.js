import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';
import FetchComments from 'components/FetchComments';
import { toggleAuth } from 'store/actions';
import { connect } from 'react-redux';

const App = ({ toggleAuth, isAuthenticated }) => {
  const authHandler = () => {
    toggleAuth(isAuthenticated);
  };

  return (
    <div>
      <div className='navigation-bar'>
        <Link to='/'>Home</Link>
        <br />
        <Link to='/post'>Post</Link>
        <br />
        <Link to='/fetch'>Fetch</Link>
      </div>

      <h3>
        <button onClick={authHandler}>{isAuthenticated ? 'Sign Out' : 'Sign In'}</button>
      </h3>

      <Switch>
        <Route path='/post' exact component={CommentBox} />
        <Route path='/fetch' exact component={FetchComments} />
        <Route path='/' component={CommentList} />
      </Switch>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.isAuthenticated,
  };
};

export default connect(mapStateToProps, { toggleAuth })(App);
