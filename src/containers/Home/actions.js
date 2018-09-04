import api from '@/utils/api'

export const fetchJobs = () => {
    return {
        type: 'FETCH_JOBS',
        payload: api().get('/jobs')
    }
}