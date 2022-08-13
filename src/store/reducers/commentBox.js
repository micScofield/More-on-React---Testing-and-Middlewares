import * as types from 'store/actions/types'

const initialState = {
    comment: ''
}

const commentBoxFormSubmitReducer = (state, action) => {
    return {
        ...state,
        comment: action.payload,
    }
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case types.COMMENT_BOX_FORM_SUBMIT: return commentBoxFormSubmitReducer(state, action)
        default: return state
    }
}

export default reducer
