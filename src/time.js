
export default customConsole => (target, name, descriptor) => {
  const _copy = descriptor.value
  const hasCustom = customConsole && customConsole.time && customConsole.timeEnd
  const c = console || customConsole

  descriptor.value = function (...args) {
    if (!console && !hasCustom) return _copy.apply(this, args)
    c.time(name)
    const response = _copy.apply(this, args)
    c.timeEnd(name)
    return response
  }
}

