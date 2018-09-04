import api from '@/utils/api'

export const fetchJobDetail = (id) => {
    return {
        type: 'FETCH_JOB_DETAIL',
        payload: api().get(`/job/${id}`)
    }
}