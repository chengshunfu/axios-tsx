import { AxiosRequestConfig } from './types'
export default function xhr(config: AxiosRequestConfig) {
  const { url, method = 'get', data = null } = config
  let request = new XMLHttpRequest()
  request.open(method.toUpperCase(), url, true)
  request.onreadystatechange = function() {
    if (request.readyState === 4 && request.status !== 0) {
      if (request.status >= 200 && request.status < 300) {
      }
    }
  }
  request.send(data)
}
