/**
 * This is decorator for async functions, don't use it on normal functions.
 * After using auto_catch, you don't need catch any errors in async funciton,
 * and you won't get any warnings for about promise rejection.
 */

const defaultCatchType = 'log'

const dynamicCatchType = 'dynamic_catch'

const errorCatch = {
  error: err => console.error(`${err}`),
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
  const isAsync = `${_copy}`.startsWith('async')
  let catchHandler = dispenseCatch(catchType)
  
  descriptor.value = function(...args) {
    if (catchHandler === dynamicCatchType && this[catchType]) {
      catchHandler = this[catchType]
    }
    
    return !isAsync ? _copy.apply(this, args) :
      _copy.apply(this, args).catch(catchHandler.bind(this))
  }
}
