export const promisefy = (method, ...args) => {
  return new Promise((resolve, reject) => {
    args.push(err => (err ? reject(err) : resolve()))
    method(...args)
  })
}
