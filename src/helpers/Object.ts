export const injectHiddenProps = (obj, name, value = undefined) => {
  if (!obj) return obj
  const options: any = { enumerable: false }
  if (value) options.value = value
  Object.defineProperty(obj, name, options)
  return obj
}

export const hideObjectProps = (...names: string[]) => obj => {
  if (!obj) return obj
  names.forEach(name => {
    injectHiddenProps(obj, name)
  })
  return obj
}
