import * as types from 'store/actions/types';

// export const commentBoxFormSubmit = (comment) => (dispatch) => {
//   const data = comment;
//   dispatch({
//     type: types.COMMENT_BOX_FORM_SUBMIT,
//     payload: data,
//   });
// };

export const commentBoxFormSubmit = (comment) => {
  const data = comment;
  return {
    type: types.COMMENT_BOX_FORM_SUBMIT,
    payload: data,
  }
};
