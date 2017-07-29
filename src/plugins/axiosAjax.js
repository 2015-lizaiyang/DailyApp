import axios from 'axios'
import qs from 'qs'
export default {
  install (vue, options) {
    vue.prototype.$axios = axios.create({
      baseURL: options.API_URL,
      timeout: options.timeout,
      responseType: 'json',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': typeof window.sessionStorage.accessToken === 'undefined' ? '' : window.sessionStorage.accessToken
      },
      transformRequest: [(data) => {
        return qs.stringify(data)
      }]
    })
  }
}
