import Cookies from 'js-cookie'
import { FC, createContext, useCallback, useEffect, useState } from 'react'

import { CookieAttributes, CookieContextProps, ProviderCookieProps, ValidCookieObject } from '.'

export const CookieContext = createContext<CookieContextProps | null>(null)

export const ProviderCookie: FC<ProviderCookieProps> = (props) => {
  const [cookieValues, setCookieValues] = useState<ValidCookieObject>()

  const getCookie = useCallback(<K extends keyof ValidCookieObject>(name: K): ValidCookieObject[K] | undefined => {
    const cookie = Cookies.get(String(name))
    setCookieValues((prevState) => ({
      ...prevState,
      [name]: cookie ? JSON.parse(cookie) : undefined,
    }))
    return cookie ? JSON.parse(cookie) : undefined
  }, [])

  const changeCookie = useCallback(
    <K extends keyof ValidCookieObject>(name: K, value: ValidCookieObject[K], options?: CookieAttributes) => {
      try {
        const valueToStore =
          typeof value === 'string' ||
          typeof value === 'boolean' ||
          typeof value === 'number' ||
          typeof value === 'bigint'
            ? value
            : JSON.stringify(value)
        Cookies.set(String(name), valueToStore, options)
        setCookieValues((prevState) => ({ ...prevState, [name]: value }))
      } catch {
        console.info(`Provider Cookie. ChangeCookie error - key:${name}, value:${value}.`)
      }
    },
    [],
  )

  const removeCookieValue = useCallback(<K extends keyof ValidCookieObject>(name: K, options?: CookieAttributes) => {
    try {
      Cookies.remove(String(name), options)
      setCookieValues((prevState) => ({ ...prevState, [name]: undefined }))
    } catch {
      console.info(`Provider Cookie. RemoveCookieValue error - key:${name}.`)
    }
  }, [])

  const removeCookieValues = useCallback(() => {
    if (props.validate && props.validate.validateKeys) {
      props.validate?.validateKeys.forEach((key) => {
        removeCookieValue(String(key) as never)
      })
    } else {
      console.info('Provider Cookie. Validate is not defined.')
    }
  }, [props.validate, removeCookieValue])

  const checkCookie = useCallback(() => {
    if (props.validate && props.validate.validateKeys && props.validate.getValidateCookieValue) {
      props.validate?.validateKeys.forEach((key) => {
        const cookieName = String(key)
        const cookieValue = Cookies.get(cookieName)
        if (cookieValue) {
          try {
            const decodedCookieValue = decodeURIComponent(cookieValue)
            const parsedValue = JSON.parse(decodedCookieValue)

            if (!props.validate?.getValidateCookieValue(cookieName as never, parsedValue as never)) {
              removeCookieValue(cookieName as never)
            } else {
              setCookieValues((prevState) => ({
                ...prevState,
                [key]: parsedValue,
              }))
            }
          } catch {
            removeCookieValue(cookieName as never)
          }
        } else {
          removeCookieValue(cookieName as never)
        }
      })
    } else {
      console.info('Provider Cookie. Validate is not defined.')
    }
  }, [props.validate, removeCookieValue])

  useEffect(() => {
    checkCookie()
  }, [checkCookie])

  return (
    <CookieContext.Provider
      value={{
        getCookie,
        setCookie: changeCookie,
        removeCookieValue,
        removeCookieValues,
        checkCookie,
        cookieValues,
      }}
    >
      {props.children}
    </CookieContext.Provider>
  )
}
