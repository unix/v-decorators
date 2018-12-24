
export default (wait = 300, options = {}) => (target, key, descriptor) => {
  let result
  let timeout
  let previous = 0
  const _copy = descriptor.value

  descriptor.value = function (...args) {
    const now = Date.now()
    if (!previous && options.leading === false) {
      previous = now
    }
    const remaining = wait - (now - previous)
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      result = _copy.apply(this, args)
      if (!timeout) {
        args = null
      }
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(() => {
        previous = options.leading === false ? 0 : now
        timeout = null
        result = _copy.apply(this, args)
        if (!timeout) {
          args = null
        }
      }, remaining)
    }
    return result
  }
}
