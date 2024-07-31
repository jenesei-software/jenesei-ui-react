import Cookies from 'js-cookie'
import { FC, createContext, useCallback, useEffect, useState } from 'react'

import {
  CookieAttributes,
  CookieContextProps,
  ProviderCookieProps,
  ValidCookieObject,
} from '.'

export const CookieContext = createContext<CookieContextProps | null>(null)

export const ProviderCookie: FC<ProviderCookieProps> = (props) => {
  const [cookie, setCookie] = useState<ValidCookieObject>()

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
    if (
      props.validate &&
      props.validate.validateKeys &&
      props.validate.getValidateLocalStorageValue
    ) {
      props.validate?.validateKeys.forEach((key) => {
        const cookieValue = Cookies.get(String(key))
        if (cookieValue) {
          try {
            const parsedValue = JSON.parse(cookieValue)
            if (
              !props.validate?.getValidateLocalStorageValue(
                String(key) as never,
                parsedValue as never,
              )
            ) {
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
    } else {
      console.info('Provider Cookie: validate is not defined.')
    }
  }, [props.validate, removeCookie])

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
      {props.children}
    </CookieContext.Provider>
  )
}
