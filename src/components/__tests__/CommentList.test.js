const { default: CommentList } = require('components/CommentList');
const { mount } = require('enzyme');

import Root from 'Root';

describe('comment list', () => {
  let wrapped;

  beforeEach(() => {
    const initialState = {
        savedComments: {
            comments: [ 'comment1', 'comment2' ]
        }
    }
    wrapped = mount(
      <Root initialState={initialState}>
        <CommentList />
      </Root>
    );
  });

  afterEach(() => {
    wrapped.unmount();
  });

  it('shows one li element per comment', () => {
    expect(wrapped.find('li').length).toEqual(2);
  });

  it('shows text for each comment inside li', () => {
    const cheerioWrapper = wrapped.render().text() // returns all the text (not html) from inside the component

    console.log(cheerioWrapper) // returns comment1comment2

    expect(cheerioWrapper).toContain('comment1')
    expect(cheerioWrapper).toContain('comment2')
  });
});
