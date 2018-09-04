const initialState = {
    jobs: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_JOBS_FULFILLED':
            state = {
                ...state,
                jobs: action.payload.data
            }
            return state
        default:
            return state
    }
}