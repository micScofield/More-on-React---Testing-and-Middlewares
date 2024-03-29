import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { watchAll } from 'store/sagas';

//reducers
import CommentBoxFormSubmitReducer from 'store/reducers/commentBox';
import AuthReducer from 'store/reducers/auth'
import reduxStateValidator from 'components/middlewares/reduxStateValidator';

// import async from 'components/middlewares/async';

// const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose

const rootReducer = combineReducers({
  comments: CommentBoxFormSubmitReducer,
  auth: AuthReducer
});

const sagaMiddleware = createSagaMiddleware();

const Root = ({ children, initialState = {} }) => {
  const store = createStore(rootReducer, initialState, applyMiddleware(thunk, sagaMiddleware, reduxStateValidator));

  sagaMiddleware.run(watchAll);

  return <Provider store={store}>{children}</Provider>;
};

export default Root;
