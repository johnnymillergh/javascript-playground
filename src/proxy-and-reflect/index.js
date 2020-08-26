/**
 * Observe an object by proxy
 * @param {*} object
 * @param {function} callback function
 * @returns {Proxy} the proxy of object
 */
export function observe (object, callback) {
  return new Proxy(object, {
    get (target, key, receiver) {
      return Reflect.get(target, key, receiver)
    },
    set (target, key, value) {
      if (typeof value === 'object') {
        const recursive = observe(value, callback)
        const result = Reflect.set(target, key, recursive)
        callback(key, recursive)
        return result
      }
      const result = Reflect.set(target, key, value)
      callback(key, value)
      return result
    },
    deleteProperty (target, propertyKey) {
      callback(propertyKey, Reflect.get(target, propertyKey))
      return Reflect.deleteProperty(object, propertyKey)
    }
  })
}
