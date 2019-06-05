
export default (sources = {}) => target => {
  const _created = target.created
  target.created = function () {
    _created && _created.call(this)
    Object.keys(sources).forEach(key => {
      this[key] = sources[key]
      if (typeof this[key] === 'function') {
        this[key] = (...args) => sources[key].apply(this, args)
      }
    })
  }
}
