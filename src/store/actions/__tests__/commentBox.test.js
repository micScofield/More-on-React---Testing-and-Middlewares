import { commentBoxFormSubmit } from 'store/actions';
import { COMMENT_BOX_FORM_SUBMIT } from 'store/actions/types';

describe('comment box form submit', () => {
  it('has a correct type', () => {
    const action = commentBoxFormSubmit();

    expect(action.type).toEqual(COMMENT_BOX_FORM_SUBMIT);
  });

  it('has a correct payload', () => {
    const action = commentBoxFormSubmit('test');

    expect(action.payload).toEqual('test');
  });
});
