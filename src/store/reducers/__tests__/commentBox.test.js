import { COMMENT_BOX_FORM_SUBMIT } from 'store/actions/types';
import commentBox from 'store/reducers/commentBox';

it('acts on COMMENT_BOX_FORM_SUBMIT action type', () => {
  const state = commentBox(
    { comments: [] },
    { type: COMMENT_BOX_FORM_SUBMIT, payload: 'test' }
  );
  expect(state.comments.length).toEqual(1);
  expect(state.comments[0]).toEqual('test');
});

it('doesnt throw an error if passed with an non existing action type', () => {
  const state = commentBox(
    { comments: [] },
    { type: 'NON_EXISTING_ACTION_TYPE', payload: 'test' }
  );
  expect(state.comments.length).toEqual(0);
});
