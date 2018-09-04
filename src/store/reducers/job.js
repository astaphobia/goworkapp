const initialState = {
    jobs: [],
    jobDetail: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case 'FETCH_JOBS_FULFILLED':
            state = {
                ...state,
                jobs: action.payload.data
            }
            return state
        case 'FETCH_JOB_DETAIL_PENDING':
            state = {
                ...state,
                jobDetail: {}
            }
            return state
        case 'FETCH_JOB_DETAIL_FULFILLED':
            state = {
                ...state,
                jobDetail: action.payload.data
            }
            return state
        default:
            return state
    }
}