const { default: CommentBox } = require('components/CommentBox');
const { mount } = require('enzyme');
const { default: Root } = require('Root');

let wrapped;
beforeAll(() => {
  wrapped = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterAll(() => {
  wrapped.unmount();
});

describe('comment box', () => {
  it('shows a text area and a button', () => {
    expect(wrapped.find('textarea')).toHaveLength(1);
    expect(wrapped.find('button').length).toEqual(1);
  });
});

describe('the text area', () => {
  let userInput = 'test';
  beforeEach(() => {
    wrapped
      .find('textarea')
      .simulate('change', { target: { value: userInput } });

    wrapped.update();
  });

  it('enters user input into the text area field', () => {
    expect(wrapped.find('textarea').prop('value')).toEqual(userInput);
  });

  it('clears text area field upon form submission', () => {
    wrapped.find('form').simulate('submit', { preventDefault: () => {} });

    wrapped.update();

    expect(wrapped.find('textarea').prop('value')).toEqual('');
  });
});
