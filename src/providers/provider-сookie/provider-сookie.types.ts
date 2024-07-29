import Cookies from 'node_modules/@types/js-cookie'

export type CookieAttributes = Cookies.CookieAttributes

export interface ProviderCookieProps {
  children: React.ReactNode
}

type ValidCookieValue =
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
    name: keyof ValidCookieObject,
  ) => ValidCookieObject[keyof ValidCookieObject] | undefined
  setCookie: (
    name: keyof ValidCookieObject,
    value: ValidCookieObject[keyof ValidCookieObject],
    options?: CookieAttributes,
  ) => void
  removeCookie: (
    name: keyof ValidCookieObject,
    options?: CookieAttributes,
  ) => void
  cookie: ValidCookieObject | undefined
}
