const { default: CommentList } = require('components/CommentList');
const { mount } = require('enzyme');
import CommentBox from 'components/CommentBox';
import Root from 'Root';

describe('comment list', () => {
  let wrapped;
  let commentBox;

  beforeEach(() => {
    wrapped = mount(
      <Root>
        <CommentList />
      </Root>
    );
  });

  afterEach(() => {
    wrapped.unmount();
    commentBox.unmount();
  });

  it('shows one li element per comment', () => {
    commentBox = mount(
      <Root>
        <CommentBox />
      </Root>
    );

    commentBox
      .find('textarea')
      .simulate('change', { target: { value: 'test' } });

    commentBox.find('textarea').update();

    commentBox.find('form').simulate('submit', { preventDefault: () => {} });

    commentBox
      .find('textarea')
      .simulate('change', { target: { value: 'test2' } });

    commentBox.find('textarea').update();

    commentBox.find('form').simulate('submit', { preventDefault: () => {} });

    // const totalComments = store.getState().savedComments.comments.length;
    // expect(wrapped.find('ul').children('li')).toHaveTextContent('test');
    // expect(wrapped.find('li').length).toEqual(totalComments);
  });
});
