import React, { useEffect } from 'react';
import { connect } from 'react-redux';

const requireAuth = (ChildComponent) => {
  const ComposedComponent = (props) => {
    const { isAuthenticated, history } = props
    
    useEffect(() => {
      if (!isAuthenticated) {
        history.push('/');
      }
    }, [ history, isAuthenticated ]);

    return <ChildComponent { ...props } />;
  };

  const mapStateToProps = (state) => {
    return {
      isAuthenticated: state.auth.isAuthenticated,
    };
  };

  return connect(mapStateToProps, {})(ComposedComponent);
};

export default requireAuth