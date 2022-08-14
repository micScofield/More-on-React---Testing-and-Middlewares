const { default: CommentBox } = require('components/CommentBox');
const { mount } = require('enzyme');
const { Provider } = require('react-redux');
import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import CommentBoxFormSubmitReducer from 'store/reducers/commentBox';

const rootReducer = combineReducers({
  savedComments: CommentBoxFormSubmitReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk))

describe('comment box', () => {
  let wrapped;

  beforeEach(() => {
    wrapped = mount(
      <Provider store={store}>
        <CommentBox />
      </Provider>
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('shows a text area and a button', () => {
    expect(wrapped.find('textarea')).toHaveLength(1);
    expect(wrapped.find('button').length).toEqual(1);
  });

  it('enters user input into the text area field', () => {
    let userInput = 'test';
    wrapped
      .find('textarea')
      .simulate('change', { target: { value: userInput } });

    wrapped.find('textarea').update();
    expect(wrapped.find('textarea').prop('value')).toEqual(userInput);
  });

  it('clears text area field upon form submission', () => {
    wrapped.find('textarea').simulate('change', { target: { value: 'test' } });

    wrapped.find('textarea').update();

    wrapped.find('form').simulate('submit', { preventDefault: () => {} });

    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
