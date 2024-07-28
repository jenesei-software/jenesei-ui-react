import { i18n } from 'i18next'
import { ReactNode } from 'react'

export interface LanguageContextProps<T extends string> {
  language: T
  changeLanguage: (newLang: T) => void
}

export interface ProviderLanguageProps<T extends string> {
  defaultLanguage: T
  i18n: i18n
  children: ReactNode
}
