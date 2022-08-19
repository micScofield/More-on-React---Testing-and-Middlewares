import reduxStateSchema from "components/schemas/reduxStateSchema";
import tv4 from "tv4";

const reduxStateValidator = ({ dispatch, getState }) => (next) => (action) => {
    // hit next to send it to to reducer and fetch the updated state. We can run validation on the updated state, if it doeesn't match, we can emit warnings.
    next(action);

    // validation logic ie. when it has passed through all other middlewares in the process
    if (!tv4.validate(getState(), reduxStateSchema)) {
        console.warn('Invalid state schema detected !', getState())
    }
};

export default reduxStateValidator