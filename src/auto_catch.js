const defaultCatchType = 'log'

const dynamicCatchType = 'dynamic_catch'

const errorCatch = {
  error: err => console.error(err),
  log: err => console.log(err),
  slient: () => {},
}

const dispenseCatch = type => {
  if (typeof type === 'function') return type
  if (errorCatch[type]) return errorCatch[type]
  if (typeof type === 'string') return dynamicCatchType
  return errorCatch[defaultCatchType]
}

export default (catchType = defaultCatchType) => (target, name, descriptor) => {
  const _copy = descriptor.value
  let catchHandler = dispenseCatch(catchType)

  descriptor.value = function (...args) {
    if (catchHandler === dynamicCatchType && this[catchType]) {
      catchHandler = this[catchType]
    }
    return Promise.resolve(_copy.apply(this, args)).catch(catchHandler.bind(this))
  }
}
