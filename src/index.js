import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { applyMiddleware, combineReducers, createStore } from 'redux'
import createSagaMiddleware from "@redux-saga/core";
import thunk from "redux-thunk";
import { Provider } from "react-redux";

import App from "components/App";
import { watchAll } from 'store/sagas'

//reducers
import CommentBoxFormSubmitReducer from 'store/reducers/commentBox'

// const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose

const rootReducer = combineReducers({
  savedComment: CommentBoxFormSubmitReducer
})

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(thunk, sagaMiddleware))

sagaMiddleware.run(watchAll)

const app = (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
)

ReactDOM.render(
  <React.StrictMode>
    {app}
  </React.StrictMode>,
  document.getElementById("root")
);
