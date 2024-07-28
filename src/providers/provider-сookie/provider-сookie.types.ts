import Cookies from 'node_modules/@types/js-cookie'

export type CookieAttributes = Cookies.CookieAttributes

export interface ProviderCookieProps {
  children: React.ReactNode
}

export type ValidCookieValue = string | number | boolean | ValidCookieObject

export interface ValidCookieObject {}

export interface CookieContextProps {
  getCookie: (
    name: keyof ValidCookieObject,
  ) => ValidCookieObject[keyof ValidCookieObject] | undefined
  setCookie: (
    name: keyof ValidCookieObject,
    value: ValidCookieObject[keyof ValidCookieObject] | ValidCookieValue,
    options?: CookieAttributes,
  ) => void
  removeCookie: (
    name: keyof ValidCookieObject,
    options?: CookieAttributes,
  ) => void
}
