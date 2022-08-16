import axios from 'axios';
import * as types from 'store/actions/types';

export const fetchComments = () => dispatch => {
  let data;
  axios
    .get('http://jsonplaceholder.typicode.com/comments')
    .then((response) => {
      data = response.data.slice(0, 5);
      dispatch({
        type: types.FETCH_COMMENTS,
        payload: data,
      });
    });
};
