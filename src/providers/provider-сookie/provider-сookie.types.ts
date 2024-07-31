import Cookies from 'node_modules/@types/js-cookie'

export type CookieAttributes = Cookies.CookieAttributes

export interface ProviderCookieProps {
  children: React.ReactNode
  validate?: {
    validateKeys: (keyof ValidCookieObject)[]
    getValidateLocalStorageValue: <K extends keyof ValidCookieObject>(
      key: K,
      value: ValidCookieObject[K],
    ) => value is ValidCookieObject[K]
  }
}

export interface ValidCookieObject {}

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
  checkCookie: () => void
  cookie: ValidCookieObject | undefined
}
