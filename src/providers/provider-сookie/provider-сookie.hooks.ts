import { useCallback, useContext, useState } from 'react'

import { CookieContext, ValidCookieObject } from '.'

export const useCookie = () => {
  const context = useContext(CookieContext)
  if (!context) {
    throw new Error('useCookie must be used within an ProviderCookie')
  }
  return context
}

export const useCookieKey = (key: keyof ValidCookieObject) => {
  const { getCookie, removeCookie, setCookie } = useCookie()

  const [value, setValue] = useState<ValidCookieObject[typeof key] | undefined>(
    getCookie(key),
  )

  const updateValue = useCallback(
    (
      newValue: ValidCookieObject[typeof key],
      options?: Cookies.CookieAttributes,
    ) => {
      setCookie(key, newValue, options)
      setValue(newValue)
    },
    [key, setCookie],
  )

  const deleteValue = useCallback(
    (options?: Cookies.CookieAttributes) => {
      removeCookie(key, options)
      setValue(undefined)
    },
    [key, removeCookie],
  )

  return [value, updateValue, deleteValue] as const
}
