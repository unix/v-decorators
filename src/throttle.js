
export default (wait = 300) => (target, key, descriptor) => {
  const _copy = descriptor.value
  let timeout

  const limit = (func, wait) => {
    return (...args) => {
      const throttler = () => {
        timeout = null
        func.apply(this, args)
      }

      if (!timeout) timeout = setTimeout(throttler, wait)
    }
  }


  descriptor.value = function (...args) {
    return limit(_copy.bind(this), wait)(...args)
  }
}
