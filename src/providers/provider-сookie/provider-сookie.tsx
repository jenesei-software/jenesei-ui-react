import Cookies from 'js-cookie'
import { FC, createContext, useCallback, useEffect, useState } from 'react'

import { CookieContextProps, ProviderCookieProps, ValidCookieObject } from '.'

export const CookieContext = createContext<CookieContextProps | null>(null)

export const ProviderCookie: FC<ProviderCookieProps> = ({ children }) => {
  const [cookie, setCookie] = useState<ValidCookieObject>()

  const getCookie: CookieContextProps['getCookie'] = useCallback((name) => {
    const cookie = Cookies.get(String(name))
    return cookie ? JSON.parse(cookie) : undefined
  }, [])

  // const isValidCookieValue = useCallback(
  //   <K extends keyof ValidCookieObject>(
  //     key: K,
  //     // eslint-disable-next-line @typescript-eslint/no-explicit-any
  //     value: any,
  //   ): value is ValidCookieObject[K] => {
  //     const expectedType = typeof ({} as ValidCookieObject)[key]
  //     switch (expectedType) {
  //       case 'string':
  //         return typeof value === 'string'
  //       case 'number':
  //         return typeof value === 'number'
  //       case 'boolean':
  //         return typeof value === 'boolean'
  //       case 'object':
  //         if (value === null || Array.isArray(value)) return false
  //         return Object.entries(value).every(([subKey, subValue]) => {
  //           if (typeof subKey !== 'string') return false
  //           return isValidCookieValue(subKey, subValue)
  //         })
  //       default:
  //         return false
  //     }
  //   },
  //   [],
  // )

  const changeCookie: CookieContextProps['setCookie'] = (
    name,
    value,
    options,
  ) => {
    try {
      Cookies.set(String(name), JSON.stringify(value), options)
      setCookie((prevState) => ({ ...prevState, [name]: value }))
    } catch {
      console.error(`Error. setCookie - key:${name}, value:${value}`)
    }
  }

  const removeCookie: CookieContextProps['removeCookie'] = useCallback(
    (name, options) => {
      try {
        Cookies.remove(String(name), options)
        setCookie((prevState) => ({ ...prevState, [name]: undefined }))
      } catch {
        console.error(`Error. setCookie - key:${name}, value:${undefined}`)
      }
    },
    [],
  )

  useEffect(() => {
    const validKeys = Object.keys({}) as (keyof ValidCookieObject)[]

    validKeys.forEach((key) => {
      const cookieValue = Cookies.get(String(key))
      if (cookieValue) {
        try {
          const parsedValue = JSON.parse(cookieValue)
          setCookie((prevState) => ({ ...prevState, [key]: parsedValue }))
        } catch {
          if (String(key)) removeCookie(String(key))
        }
      } else {
        removeCookie(String(key))
      }
    })
  }, [removeCookie])

  return (
    <CookieContext.Provider
      value={{
        getCookie,
        setCookie: changeCookie,
        removeCookie,
        cookie,
      }}
    >
      {children}
    </CookieContext.Provider>
  )
}
