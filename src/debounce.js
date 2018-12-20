
export default (time = null) => (target, name, descriptor) => {
  const _copy = descriptor.value
  let debouncePass = true
  const debounceCalled = () => {
    debouncePass = false
    const timer = setTimeout(() => {
      debouncePass = true
      clearTimeout(timer)
    }, time || 0)
  }
  
  descriptor.value = function(...args) {
    if (time === null) return _copy.apply(this, args)
    if (!debouncePass) return
    debounceCalled()
    return _copy.apply(this, args)
  }
}
