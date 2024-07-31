import Cookies from 'js-cookie'
import { FC, createContext, useCallback, useEffect, useState } from 'react'

import {
  CookieAttributes,
  CookieContextProps,
  ProviderCookieProps,
  ValidCookieObject,
} from '.'

export const CookieContext = createContext<CookieContextProps | null>(null)

export const ProviderCookie: FC<ProviderCookieProps> = ({
  children,
  validKeys,
}) => {
  const [cookie, setCookie] = useState<ValidCookieObject>()


  const isValidCookieValue = useCallback(
    <K extends keyof ValidCookieObject>(
      key: K,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      value: any,
    ): value is ValidCookieObject[K] => {
      const checkValue = value as (ValidCookieObject)[typeof key]
      switch (typeof checkValue) {
        case 'string':
          return typeof value === 'string'
        case 'number':
          return typeof value === 'number'
        case 'boolean':
          return typeof value === 'boolean'
        case 'object':
          if (value === null || Array.isArray(value)) return false
          return Object.entries(value).every(([subKey, subValue]) => {
            return (
              typeof subKey === 'string' &&
              isValidCookieValue(subKey as keyof ValidCookieObject, subValue)
            )
          })
        default:
          return false
      }
    },
    [],
  )

  const getCookie = useCallback(
    <K extends keyof ValidCookieObject>(
      name: K,
    ): ValidCookieObject[K] | undefined => {
      const cookie = Cookies.get(String(name))
      return cookie ? JSON.parse(cookie) : undefined
    },
    [],
  )

  const changeCookie = useCallback(
    <K extends keyof ValidCookieObject>(
      name: K,
      value: ValidCookieObject[K],
      options?: CookieAttributes,
    ) => {
      try {
        Cookies.set(String(name), JSON.stringify(value), options)
        setCookie((prevState) => ({ ...prevState, [name]: value }))
      } catch {
        console.error(`Error. setCookie - key:${name}, value:${value}`)
      }
    },
    [],
  )

  const removeCookie = useCallback(
    <K extends keyof ValidCookieObject>(
      name: K,
      options?: CookieAttributes,
    ) => {
      try {
        Cookies.remove(String(name), options)
        setCookie((prevState) => ({ ...prevState, [name]: undefined }))
      } catch {
        console.error(`Error. setCookie - key:${name}, value:${undefined}`)
      }
    },
    [],
  )

  const checkCookie = useCallback(() => {
    (validKeys ?? []).forEach((key) => {
      const cookieValue = Cookies.get(String(key))
      if (cookieValue) {
        try {
          const parsedValue = JSON.parse(cookieValue)
          if (!isValidCookieValue(key, parsedValue)) {
            removeCookie(String(key) as never)
          } else {
            setCookie((prevState) => ({ ...prevState, [key]: parsedValue }))
          }
        } catch {
          removeCookie(String(key) as never)
        }
      } else {
        removeCookie(String(key) as never)
      }
    })
  }, [isValidCookieValue, removeCookie, validKeys])

  useEffect(() => {
    checkCookie()
  }, [checkCookie])

  return (
    <CookieContext.Provider
      value={{
        getCookie,
        setCookie: changeCookie,
        removeCookie,
        checkCookie,
        cookie,
      }}
    >
      {children}
    </CookieContext.Provider>
  )
}
