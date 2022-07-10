import * as types from '../actions/types'

const initialState = {
    username: '',
    orders: { id: 123, payment: true, delivery: false }
}

const createUser = (state, action) => {
    return {
        ...state,
        username: action.payload.user,
    }
}

const updateUser = (state) => {

    // Approach 1.. This mutates directly and doesnt re-render the component
    // state.orders.delivery = true
    // return { ...state }

    return {
        ...state,
        orders: { ...state.orders, delivery: true }
    }
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case types.USER_CREATE: return createUser(state, action)
        case types.USER_UPDATE: return updateUser(state)
        default: return state
    }
}

export default reducer
