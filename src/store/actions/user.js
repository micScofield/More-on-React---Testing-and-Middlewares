import * as types from './types'

const create = (payload) => ({
    type: types.USER_CREATE,
    payload: payload
})

export const createUser = (user) => dispatch => {
    const data = { user }
    dispatch(create(data))
}

export const updateUser = () => {
    return {
        type: types.USER_UPDATE
    }
}