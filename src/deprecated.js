const prefix = 'DEPRECATION '
const MESSAGE = 'This function will be removed.'

export default (message = MESSAGE) => (target, name, descriptor) => {
  const _copy = descriptor.value
  const text = `${prefix} ${name} :${message}`

  descriptor.value = function (...args) {
    console.log(text)
    return _copy.apply(this, args)
  }
}
