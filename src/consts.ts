import { transformObjectToArray, transformObjectValuesToKeys } from './functions'
import { ILanguage, IService } from './types'

export const ObjectLanguage: ILanguage = {
  en: {
    value: 'en',
    label: 'English',
    placeholder: 'English',
    search: 'English, en'
  },
  ru: {
    value: 'ru',
    label: 'Русский',
    placeholder: 'Русский',
    search: 'Русский, ru'
  }
}

export const ObjectService: IService = {
  jenesei_id: {
    value: 'jenesei_id',
    label: 'Jenesei ID',
    placeholder: 'Jenesei ID',
    search: 'Jenesei ID'
  }
}

export const ListLanguage = transformObjectToArray(ObjectLanguage)
export const KeysLanguage = transformObjectValuesToKeys(ObjectLanguage)

export const ListService = transformObjectToArray(ObjectService)
export const KeysService = transformObjectValuesToKeys(ObjectService)
