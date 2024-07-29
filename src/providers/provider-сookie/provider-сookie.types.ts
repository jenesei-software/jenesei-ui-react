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
  getCookie: <K extends keyof ValidCookieObject>(
    name: K,
  ) => ValidCookieObject[K] | undefined
  setCookie: <K extends keyof ValidCookieObject>(
    name: K,
    value: ValidCookieObject[K],
    options?: CookieAttributes,
  ) => void
  removeCookie: <K extends keyof ValidCookieObject>(
    name: K,
    options?: CookieAttributes,
  ) => void
  cookie: ValidCookieObject | undefined
}
