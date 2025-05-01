import type { Meta, StoryObj } from '@storybook/react'
import moment from 'moment'
import { FC, useEffect, useState } from 'react'
import 'styled-components'

import { DatePicker, DatePickerProps, MonthItem, WeekItem } from '../components/date-picker'

const meta: Meta<typeof DatePicker> = {
  component: DatePicker,
  title: 'Component/DatePicker'
}

export default meta
type Story = StoryObj<typeof DatePicker>

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
const DatePickerWrapper: FC<DatePickerProps> = props => {
  const [value, setValue] = useState<number | null>(props.value)
  const handleSelectChange = (value: number) => {
    setValue(value)
  }

  useEffect(() => {
    setValue(props.value)
  }, [props.value])

  return <DatePicker {...props} value={value} onChange={handleSelectChange} />
}

const PastHundredYearsStartDate = moment.utc().subtract(100, 'years').startOf('year').valueOf()
const PastHundredYearsEndDate = moment.utc().startOf('day').valueOf()
const PastHundredYearsValue = moment.utc().startOf('day').valueOf()

export const PastHundredYears: Story = {
  render: args => <DatePickerWrapper {...args} />,
  args: {
    locale: {
      months: localeMonths,
      weeks: localeWeeks
    },
    size: 'medium',
    genre: 'gray',
    width: '300px',
    startDate: PastHundredYearsStartDate,
    endDate: PastHundredYearsEndDate,
    value: PastHundredYearsValue,
    onBlur(event) {
      console.log('onBlur', event)
    },
    placeholder: 'Placeholder',
    isOnClickClose: true
  }
}

const LastHundredYear18YearsAgoStartDate = moment.utc().subtract(118, 'years').startOf('year').valueOf()
const LastHundredYear18YearsAgoEndDate = moment.utc().subtract(18, 'years').valueOf()
const LastHundredYear18YearsAgoValue = moment.utc().subtract(18, 'years').startOf('day').valueOf()

export const LastHundredYear18YearsAgo: Story = {
  render: args => <DatePickerWrapper {...args} />,
  args: {
    locale: {
      months: localeMonths,
      weeks: localeWeeks
    },
    size: 'medium',
    genre: 'gray',
    width: '300px',
    startDate: LastHundredYear18YearsAgoStartDate,
    endDate: LastHundredYear18YearsAgoEndDate,
    value: LastHundredYear18YearsAgoValue
  }
}

const LastHundredYear21YearsAgoStartDate = moment.utc().subtract(121, 'years').startOf('year').valueOf()
const LastHundredYear21YearsAgoEndDate = moment.utc().subtract(21, 'years').valueOf()
const LastHundredYear21YearsAgoValue = moment.utc().subtract(21, 'years').startOf('day').valueOf()

export const LastHundredYear21YearsAgo: Story = {
  render: args => <DatePickerWrapper {...args} />,
  args: {
    locale: {
      months: localeMonths,
      weeks: localeWeeks
    },
    size: 'medium',
    genre: 'gray',
    width: '300px',
    startDate: LastHundredYear21YearsAgoStartDate,
    endDate: LastHundredYear21YearsAgoEndDate,
    value: LastHundredYear21YearsAgoValue
  }
}

const NextThreeMonthsStartDate = moment.utc().startOf('day').valueOf()
const NextThreeMonthsEndDate = moment.utc().add(3, 'months').startOf('day').valueOf()
const NextThreeMonthsValue = moment.utc().startOf('day').valueOf()

export const NextThreeMonths: Story = {
  render: args => <DatePickerWrapper {...args} />,
  args: {
    locale: {
      months: localeMonths,
      weeks: localeWeeks
    },
    size: 'medium',
    genre: 'gray',
    width: '300px',
    startDate: NextThreeMonthsStartDate,
    endDate: NextThreeMonthsEndDate,
    value: NextThreeMonthsValue
  }
}
