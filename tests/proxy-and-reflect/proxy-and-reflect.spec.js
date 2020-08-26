import { describe, test, expect } from '@jest/globals'
import { observe } from '../../src/proxy-and-reflect'

describe('Proxy and Reflect in JavaScript', () => {
  test.concurrent('Case 1', async () => {
    const objectProxy = observe(
      { id: 1, name: 'Johnny' },
      (key, value) => {
        if (typeof value === 'object') {
          console.info(`Observed field change! [${key}]: ${JSON.stringify(value)}`)
          return
        }
        console.info(`Observed field change! [${key}]: ${value}`)
      }
    )

    objectProxy.id = 2
    objectProxy.name = 'Johnny Miller'
    objectProxy.otherObject = {
      id: 2,
      name: 'Mario'
    }

    console.info('otherObject', objectProxy.otherObject)

    delete objectProxy.otherObject
    expect(objectProxy.id).toBe(2)
    expect(objectProxy.name).toBe('Johnny Miller')
  })
})
