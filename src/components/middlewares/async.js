// Doesn't work yet...

export default ({ dispatch }) => (next) => (action) => {
    console.log(action)
  if (!action.payload || !action.payload.then) return next(action);

  action.payload.then((response) => {
    console.log(action)
    const newAction = { ...action, payload: response };
    dispatch(newAction);
  });
};
