
export default (wait = 300) => (target, key, descriptor) => {
  let timeout, previous = 0
  const _copy = descriptor.value

  descriptor.value = function (...args) {
    const now = Date.now()
    previous = now
    const remaining = wait - (now - previous)
    const isTimeout = remaining <= 0 || remaining > wait
    if (isTimeout) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      _copy.apply(this, args)
    } else if (!timeout) {
      timeout = setTimeout(() => {
        previous = 0
        timeout = null
        _copy.apply(this, args)
      }, remaining)
    }
  }
}
