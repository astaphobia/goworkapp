import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: 'http://private-27298f-frontendtestmaukerja.apiary-mock.com'
    })
}