import Cookies from 'js-cookie'
import { FC, createContext, useCallback } from 'react'

import { CookieContextProps, ProviderCookieProps } from '.'

export const CookieContext = createContext<CookieContextProps | null>(null)

export const ProviderCookie: FC<ProviderCookieProps> = ({ children }) => {
  const getCookie: CookieContextProps['getCookie'] = useCallback((name) => {
    const cookie = Cookies.get(String(name))
    return cookie ? JSON.parse(cookie) : undefined
  }, [])

  const setCookie: CookieContextProps['setCookie'] = (name, value, options) => {
    Cookies.set(String(name), JSON.stringify(value), options)
  }

  const removeCookie: CookieContextProps['removeCookie'] = useCallback(
    (name, options) => {
      Cookies.remove(String(name), options)
    },
    [],
  )

  return (
    <CookieContext.Provider
      value={{
        getCookie,
        setCookie,
        removeCookie,
      }}
    >
      {children}
    </CookieContext.Provider>
  )
}
