import { applyMiddleware, combineReducers, createStore } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import { watchAll } from 'store/sagas';

//reducers
import CommentBoxFormSubmitReducer from 'store/reducers/commentBox';

// const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose

const rootReducer = combineReducers({
  savedComments: CommentBoxFormSubmitReducer,
});

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware));

sagaMiddleware.run(watchAll);

const Root = (props) => {
  return <Provider store={store}>{props.children}</Provider>;
};

export default Root;
