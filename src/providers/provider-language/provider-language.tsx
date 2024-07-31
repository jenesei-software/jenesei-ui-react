import { createContext, useMemo } from 'react'
import { I18nextProvider } from 'react-i18next'

import { LanguageContextProps, ProviderLanguageProps } from '.'

export const LanguageContext = createContext<LanguageContextProps<string> | null>(null)

export const ProviderLanguage = <T extends string>(
  props: ProviderLanguageProps<T>,
) => {
  const changeLanguage = (newLang: string) => {
    props.i18n.changeLanguage(newLang as T)
  }
  const language = useMemo(
    () => props.i18n.language as T,
    [props.i18n.language],
  )
  return (
    <I18nextProvider i18n={props.i18n}>
      <LanguageContext.Provider
        value={{
          language: language,
          changeLanguage: changeLanguage,
        }}
      >
        {props.children}
      </LanguageContext.Provider>
    </I18nextProvider>
  )
}
