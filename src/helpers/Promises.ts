export const promisefy = (method, ...args) => {
  return new Promise((resolve, reject) => {
    method(...args, (err, content) => err ? reject(err) : resolve(content))
  })
}
