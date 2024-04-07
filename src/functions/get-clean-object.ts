import cloneDeep from 'lodash/cloneDeep'

type AnyObject = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [key: string]: any
}

export function getCleanObject<T extends AnyObject>(obj: T): T {
  const clonedObj = cloneDeep(obj)

  function clean(obj: AnyObject): void {
    for (const key in obj) {
      if (Object.hasOwnProperty.call(obj, key)) {
        if (obj[key] === null || obj[key] === undefined || obj[key] === '') {
          delete obj[key]
        } else if (typeof obj[key] === 'object') {
          clean(obj[key] as AnyObject)
          if (Object.keys(obj[key]).length === 0) {
            delete obj[key]
          }
        }
      }
    }
  }

  clean(clonedObj)
  return clonedObj as T
}
