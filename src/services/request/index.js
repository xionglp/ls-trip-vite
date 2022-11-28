import useMianStore from '@/stores/modules/main'
import axios from 'axios'
import { BASE_URL, TIMEOUT } from './config'

const mainStore = useMianStore()

class LSRequest {
  constructor(baseURL, timeout = 10000) {
    this.instance = axios.create({
      baseURL: baseURL,
      timeout: timeout
    })

    // interceptors 请求拦截
    this.instance.interceptors.request.use(config => {
      mainStore.isLoading = true
      return config
    },err => {
      return err
    })

    // interceptors 响应拦截
    this.instance.interceptors.response.use(res => {
      mainStore.isLoading = false
      return res
    }, err => {
      mainStore.isLoading = false
      return err
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