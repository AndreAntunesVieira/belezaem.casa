const request = async (route, options: any = {}) => {
  if (options.data) {
    options.body = JSON.stringify(options.data)
    delete options.data
  }
  options.headers = {
    ...options.headers,
    'Content-Type': 'application/json',
  }
  const res = await fetch(`/api/${route}`, options).catch(_e => null)
  let content = await res.json().catch(_e => null)
  const empty = !content
  if (empty) content = {}
  else content.empty = false

  Object.defineProperty(content, 'empty', {
    enumerable: false,
    get() {
      return empty
    },
  })
  Object.defineProperty(content, 'status', {
    enumerable: false,
    get() {
      return res.status
    },
  })
  Object.defineProperty(content, 'headers', {
    enumerable: false,
    get() {
      const headers: any = {}
      for (let entry of res.headers.entries()) headers[entry[0]] = entry[1]
      return headers
    },
  })
  if (res.status >= 400) return Promise.reject(content)
  return content
}

export default request
