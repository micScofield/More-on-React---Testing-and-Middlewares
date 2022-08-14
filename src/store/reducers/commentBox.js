import * as types from 'store/actions/types'

const initialState = {
    comments: [],
    fetchedComments: []
}

const commentBoxFormSubmitReducer = (state, action) => {
    return {
        ...state,
        comments: [...state.comments, action.payload],
    }
}

const fetchCommentsReducer = (state, action) => {
    const formattedComments = action.payload.map(comment => comment.name)
    return {
        ...state,
        fetchedComments: [...state.fetchedComments, ...formattedComments],
    }
}

const reducer = (state=initialState, action) => {
    switch (action.type) {
        case types.COMMENT_BOX_FORM_SUBMIT: return commentBoxFormSubmitReducer(state, action)
        case types.FETCH_COMMENTS: return fetchCommentsReducer(state, action)
        default: return state
    }
}

export default reducer
