import * as types from 'store/actions/types';

export const toggleAuth = (isAuthenticated) => {
  return {
    type: types.TOGGLE_AUTH,
    payload: { isAuthenticated }
  }
};
