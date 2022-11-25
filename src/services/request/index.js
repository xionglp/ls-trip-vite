import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'

class LSRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL: baseURL,
      timeout: timeout
    })
  }

  lsRequest(config) {
    return new Promise((resolve, reject) => {
      this.instance.request(config).then(res => {
        resolve(res.data)
      }).catch(err => {
        reject(err)
      })
    })
  }

  get(config) {
    return this.lsRequest({ ...config, method: "get"})
  }

  post(config) {
    return this.lsRequest({ ...config, method: "post" })
  }
}

export default new LSRequest(BASE_URL, TIMEOUT)