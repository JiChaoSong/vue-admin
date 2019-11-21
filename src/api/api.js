import axios from 'axios'

// export const test = 'http://127.0.0.1:8000';
export const test = 'http://120.79.232.23:8000'

export const requestLogin = params => { return axios.post(`${test}/api/user/login`, params).then(res => res.data) }
