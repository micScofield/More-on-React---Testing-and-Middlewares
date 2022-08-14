const { default: CommentList } = require('components/CommentList');
const { mount } = require('enzyme');
const { Provider } = require('react-redux');
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import CommentBoxFormSubmitReducer from 'store/reducers/commentBox';

const rootReducer = combineReducers({
  savedComments: CommentBoxFormSubmitReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk))

describe('comment list', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = mount(
      <Provider store={store}>
        <CommentList />
      </Provider>
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('shows one li element per comment', () => {
    const totalComments = store.getState().savedComments.comments.length

    expect(wrapped.find('ul').children('li')).toHaveLength(totalComments);
  })
});
