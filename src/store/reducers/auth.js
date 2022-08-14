import * as types from 'store/actions/types'

const initialState = {
    isAuthenticated: false
}

const toggleUserSignin = (state, action) => {
    return {
        ...state,
        isAuthenticated: !action.payload.isAuthenticated
    }
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case types.TOGGLE_AUTH: return toggleUserSignin(state, action)
        default: return state
    }
}

export default reducer
