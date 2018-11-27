// 基于 fetch 封装的网络请求工具类
/**
 * fetch 网络请求的 header, 可自定义 header 内容
 * @type {{ Accept: string, Content-Type: string, accessToken: * }}
 */
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

/**
 * GET 请求时，拼接请求 URL
 * @param url 请求 URL
 * @param param 请求参数
 * @returns { * }
 */
const handleUrl = url => params => {
let urlParams = ''
  if (params) {
    const paramsArray = Object.keys(params)
    .map(key => `${key}=${encodeURIComponent(params[key])}`)
  if (url.search(/\?/) === -1) {
    urlParams = typeof params === 'object' ? `${url}?${paramsArray.join('&')}` : url
  } else {
    urlParams = `${url}&${paramsArray.join('&')}`
  }
  }
  return urlParams || url
}

/**
 * fetch 网络请求超时处理
 * @param original_promise 原始的 fetch
 * @param timeout 超时时间 30s
 * @returns { Promise.<*> }
 */
const timeoutFetch = (originalFetch, timeout = 30000) => {
  let timeoutBlock = () => {}
  const timeoutPromise = new Promise((resolve, reject) => {
    timeoutBlock = () => {
      // 请求超时处理
      reject(new Error('timeout promise'))
    }
  })

  // Promise.race(iterable) 方法返回一个 promise
  // 这个 promise 在 iterable 中的任意一个 promise 被解决或者拒绝后，立刻以相同的解决值被解决或以相同的拒绝原因被拒绝。
  const aborablePromise = Promise.race([
    originalFetch,
    timeoutPromise
  ])

  setTimeout(() => {
    timeoutBlock()
  }, timeout)

  return aborablePromise
}

  /**
   * 基于 fetch 封装的 GET  网络请求
   * @param url 请求 URL
   * @param params 请求参数
   * @returns { Promise }
   */
  export function getRequest (url, params = {}) {
    return timeoutFetch(fetch(handleUrl(url)(params), {
      method: 'GET',
      headers
    })).then(response => {
      if (response.ok) {
        return response.json()
      }
      return response
    }).then(response => response).catch(error => error)
  }

  /**
   * 基于 fetch 的 POST 请求
   * @param url 请求的 URL
   * @param params 请求参数
   * @returns { Promise }
   */
  export function postRequrst (url, params = {}) {
    return timeoutFetch(fetch(url, {
      method: 'POST',
      headers,
      body: JSON.stringify(params)
    })).then(response => response.json()).then(response => response).catch(error => error)
  }
