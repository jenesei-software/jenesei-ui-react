import { TRecordsView } from '@components/modal-period-toggle'

import { TLanguage } from '@assets/library-i18n'

const monthNames: Record<TLanguage, string[]> = {
  ru: [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ],
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
}

const monthNamesGenitive: Record<TLanguage, string[]> = {
  ru: [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ],
  en: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
}

export function formatDateRecords(
  view: TRecordsView = 'days',
  timestamp: number,
  language: TLanguage,
): string {
  const date = new Date(timestamp)
  switch (view) {
    case 'days':
    case 'weeks':
      return `${date.getDate().toString()} ${monthNamesGenitive[language][date.getMonth()]}, ${date.getFullYear()}`
    case 'months':
      return `${monthNames[language][date.getMonth()]} ${date.getFullYear()}`
  }
}
