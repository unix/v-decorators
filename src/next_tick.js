
export default () => (target, name, descriptor) => {
  const _copy = descriptor.value

  descriptor.value = function (...args) {
    this.$nextTick(() => {
      _copy.apply(this, args)
    })
  }
}
