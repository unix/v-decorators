
export default (time = 0) => (target, name, descriptor) => {
  const _copy = descriptor.value

  descriptor.value = function (...args) {
    const timer = setTimeout(() => {
      _copy.apply(this, args)
      clearTimeout(timer)
    }, time)
  }
}
