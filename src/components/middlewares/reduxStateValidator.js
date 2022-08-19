import reduxStateValidator from "components/schemas/reduxStateValidator";
import tv4 from "tv4";

export default ({ dispatch, getState }) => (next) => (action) => {
    // hit next to send it to to reducer and fetch the updated state. We can run validation on the updated state, if it doeesn't match, we can emit warnings.
    next(action);

    // validation logic ie. when it has passed through all other middlewares in the process
    console.log(tv4.validate(getState(), reduxStateValidator))
    console.log(getState())
};