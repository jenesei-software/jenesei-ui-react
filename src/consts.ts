import { MonthItem, WeekItem } from './components/date-picker'
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

export const localeMonths: MonthItem[] = [
  {
    localeLong: 'Январь',
    localeShort: 'Янв',
    value: 'january'
  },
  {
    localeLong: 'February',
    localeShort: 'Feb',
    value: 'february'
  },
  {
    localeLong: 'March',
    localeShort: 'Mar',
    value: 'march'
  },
  {
    localeLong: 'April',
    localeShort: 'Apr',
    value: 'april'
  },
  {
    localeLong: 'May',
    localeShort: 'May',
    value: 'may'
  },
  {
    localeLong: 'June',
    localeShort: 'Jun',
    value: 'june'
  },
  {
    localeLong: 'July',
    localeShort: 'Jul',
    value: 'july'
  },
  {
    localeLong: 'August',
    localeShort: 'Aug',
    value: 'august'
  },
  {
    localeLong: 'September',
    localeShort: 'Sep',
    value: 'september'
  },
  {
    localeLong: 'October',
    localeShort: 'Oct',
    value: 'october'
  },
  {
    localeLong: 'November',
    localeShort: 'Nov',
    value: 'november'
  },
  {
    localeLong: 'December',
    localeShort: 'Dec',
    value: 'december'
  }
]
export const localeWeeks: WeekItem[] = [
  {
    localeLong: 'Monday',
    localeShort: 'Пн',
    value: 'mo'
  },
  {
    localeLong: 'Tuesday',
    localeShort: 'Tue',
    value: 'tu'
  },
  {
    localeLong: 'Wednesday',
    localeShort: 'Wed',
    value: 'we'
  },
  {
    localeLong: 'Thursday',
    localeShort: 'Thu',
    value: 'th'
  },
  {
    localeLong: 'Friday',
    localeShort: 'Fri',
    value: 'fr'
  },
  {
    localeLong: 'Saturday',
    localeShort: 'Sat',
    value: 'sa'
  },
  {
    localeLong: 'Sunday',
    localeShort: 'Sun',
    value: 'su'
  }
]
