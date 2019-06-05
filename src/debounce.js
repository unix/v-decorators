
export default (time = null) => (target, name, descriptor) => {
  const _copy = descriptor.value
  let debouncePass = true
  let timer

  const debounceCalled = () => {
    debouncePass = false
    timer = setTimeout(() => {
      debouncePass = true
      clearTimeout(timer)
      timer = null
    }, time || 0)
  }
  const resetTime = () => {
    clearTimeout(timer)
    timer = null
    debouncePass = false
    debounceCalled()
  }

  descriptor.value = function (...args) {
    if (time === null) return _copy.apply(this, args)
    if (!debouncePass) return resetTime()
    debounceCalled()
    return _copy.apply(this, args)
  }
}
