import axios from 'axios'
import { store } from '../redux/store'
import { getToken } from './cookie'

const service = axios.create({
  baseURL: 'http://192.168.88.17/:5000/api',
  timeout: 5000
})

service.interceptors.request.use(
  config => {
    const token = store.getState().user.token
    if (token) {
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  response => {
    const res = response.data
    if (res.code !== 200) {
      // 401 Unauthorized; 403 Forbidden
      if ([401, 403].includes(res.code)) {
        store.dispatch('user/resetToken').then(() => {
          window.location.reload()
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default service
