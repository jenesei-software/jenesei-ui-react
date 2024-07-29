import Cookies from 'node_modules/@types/js-cookie'

export type CookieAttributes = Cookies.CookieAttributes

export interface ProviderCookieProps {
  children: React.ReactNode
}

export type ValidCookieValue =
  | string
  | number
  | boolean
  | ValidCookieObject
  | undefined
type ValidCookieKey = string

export interface ValidCookieObject
  extends Record<ValidCookieKey, ValidCookieValue> {}

export interface CookieContextProps {
  getCookie: (
    name: ValidCookieKey,
  ) => ValidCookieObject[ValidCookieKey] | undefined
  setCookie: (
    name: ValidCookieKey,
    value: ValidCookieObject[ValidCookieKey],
    options?: CookieAttributes,
  ) => void
  removeCookie: (name: ValidCookieKey, options?: CookieAttributes) => void
  cookie: ValidCookieObject | undefined
}
