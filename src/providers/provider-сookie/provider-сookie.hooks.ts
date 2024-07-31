import { useContext } from 'react'

import { CookieContext } from '.'

export const useCookie = () => {
  const context = useContext(CookieContext)
  if (!context) {
    throw new Error('useCookie must be used within an ProviderCookie')
  }
  return context
}
