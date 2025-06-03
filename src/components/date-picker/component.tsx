import { AnimatePresence } from 'framer-motion'
import moment from 'moment'
import { useCallback, useEffect, useMemo, useState } from 'react'
import { useTheme } from 'styled-components'

import { Outside } from '@local/areas/outside'
import { Button } from '@local/components/button'
import { Ripple } from '@local/components/ripple'
import { SelectMonth, SelectYear } from '@local/components/select'
import { Stack } from '@local/components/stack'
import { ErrorMessage } from '@local/styles/error'
import { KEY_SIZE_DATA } from '@local/theme'

import {
  DateDayProps,
  DateDropdownDay,
  DateDropdownDayOfWeek,
  DateDropdownDays,
  DateDropdownList,
  DateDropdownListParent,
  DatePickerProps,
  DateStyledInput,
  DateWrapper,
  WeekItem
} from '.'

function countSevens(number: number) {
  const divisor = 7
  const count = Math.floor(number / divisor)
  const remainder = number % divisor

  return remainder > 0 ? count + 1 : count
}

export const DatePicker = (props: DatePickerProps) => {
  const theme = useTheme()
  const isNullValue = useMemo(() => props.value === null || props.value === undefined, [props.value])
  const [unixValue, setUnixValue] = useState(props.value ? moment(props.value).utc() : moment.utc())
  const [currentMonth, setCurrentMonth] = useState(unixValue.clone().month())
  const [currentYear, setCurrentYear] = useState(unixValue.clone().year())
  const [currentDay, setCurrentDay] = useState(unixValue.clone().date())

  const currentDateLabel = useMemo(() => {
    if (isNullValue) return '' // Если значение null, то пустая строка

    if (props.value) {
      const monthIndex = moment(props.value).utc().month() // Получаем индекс месяца
      const momentMonth = moment().month(monthIndex).format('MMMM').toLowerCase() // Месяц в нижнем регистре

      // Находим локализованный месяц в массиве
      const localizedMonth = props.locale.months.find(
        month => month.value.toLowerCase() === momentMonth // Сравниваем в нижнем регистре
      )?.localeLong

      // Если локализованный месяц найден, используем его, если нет - стандартный месяц
      const monthToDisplay = localizedMonth || moment(props.value).utc().format('MMMM')

      const day = moment(props.value).utc().format('D')
      const year = moment(props.value).utc().format('YYYY')

      return `${day} ${monthToDisplay} ${year}`
    }

    return '' // Если нет значения, возвращаем пустую строку
  }, [isNullValue, props.value, props.locale.months])

  const daysInMonth: DateDayProps[] = useMemo(() => {
    const today = moment.utc()

    const startOfMonth = moment.utc().year(currentYear).month(currentMonth).startOf('month')
    const endOfMonth = moment.utc().year(currentYear).month(currentMonth).endOf('month')

    const days = []

    const startDate = props.startDate ? moment.utc(props.startDate) : null
    const endDate = props.endDate ? moment.utc(props.endDate) : null

    const daysToAddBefore = startOfMonth.isoWeekday() - 1
    if (daysToAddBefore > 0) {
      for (let i = daysToAddBefore; i > 0; i--) {
        const day = startOfMonth.clone().subtract(i, 'days')
        days.push({
          value: day.valueOf(),
          labelString: day.format('dd'),
          labelNumber: day.date(),
          dayOfWeek: day.isoWeekday(),
          isWeekend: day.isoWeekday() === 6 || day.isoWeekday() === 7,
          weekOfMonth: Math.ceil((days.length + 1) / 7),
          isToday: day.isSame(today, 'day'),
          isCurrentMonth: false,
          isDisabled: day.isBefore(startDate, 'day') || day.isAfter(endDate, 'day')
        })
      }
    }

    const currentDate = startOfMonth.clone()
    while (currentDate <= endOfMonth) {
      days.push({
        value: currentDate.valueOf(),
        labelString: currentDate.format('dd'),
        labelNumber: currentDate.date(),
        dayOfWeek: currentDate.isoWeekday(),
        isWeekend: currentDate.isoWeekday() === 6 || currentDate.isoWeekday() === 7,
        weekOfMonth: Math.ceil((days.length + 1) / 7),
        isToday: currentDate.isSame(today, 'day'),
        isCurrentMonth: true,
        isDisabled: currentDate.isBefore(startDate, 'day') || currentDate.isAfter(endDate, 'day')
      })
      currentDate.add(1, 'day')
    }

    const daysToAddAfter = 7 - endOfMonth.isoWeekday()
    if (daysToAddAfter > 0) {
      for (let i = 1; i <= daysToAddAfter; i++) {
        const day = endOfMonth.clone().add(i, 'days').startOf('day')
        days.push({
          value: day.valueOf(),
          labelString: day.format('dd'),
          labelNumber: day.date(),
          dayOfWeek: day.isoWeekday(),
          isWeekend: day.isoWeekday() === 6 || day.isoWeekday() === 7,
          weekOfMonth: Math.ceil((days.length + 1) / 7),
          isToday: day.isSame(today, 'day'),
          isCurrentMonth: false,
          isDisabled: day.isBefore(startDate, 'day') || day.isAfter(endDate, 'day')
        })
      }
    }

    days.sort((a, b) => a.value - b.value)
    return days
  }, [currentMonth, currentYear, props.endDate, props.startDate])

  // Увеличение месяца
  const increaseMonth = () => {
    const newDate = moment.utc().year(currentYear).month(currentMonth).date(currentDay).add(1, 'month')
    setCurrentDay(newDate.date())
    setCurrentMonth(newDate.month())
    setCurrentYear(newDate.year())
  }

  // Уменьшение месяца
  const decreaseMonth = () => {
    const newDate = moment.utc().year(currentYear).month(currentMonth).date(currentDay).subtract(1, 'month')
    setCurrentDay(newDate.date())
    setCurrentMonth(newDate.month())
    setCurrentYear(newDate.year())
  }

  const [isOpen, setIsOpen] = useState(false)

  const rows = useMemo(() => countSevens(daysInMonth.length) + 1, [daysInMonth])

  const height = useMemo(
    () => 40 + rows * 28 + (rows - 1) * 6 + KEY_SIZE_DATA[props.size].padding * 2,
    [props.size, rows]
  )

  const radius = useMemo(() => KEY_SIZE_DATA[props.size].radius, [props.size])

  const handleOnOpen = useCallback(() => {
    setIsOpen(true)
  }, [])
  const handleOnClose = useCallback(() => {
    setIsOpen(false)
  }, [])
  const isBlockIncreaseMonth = useMemo(() => {
    const nextMonth = moment
      .utc()
      .year(currentYear)
      .month(currentMonth)
      .date(currentDay)
      .add(1, 'month')
      .startOf('month')

    const isBeforeEndDate = props.endDate ? nextMonth.isAfter(moment.utc(props.endDate), 'month') : false
    return isBeforeEndDate
  }, [currentYear, currentMonth, currentDay, props.endDate])

  const isBlockDecreaseMonth = useMemo(() => {
    const prevMonth = moment
      .utc()
      .year(currentYear)
      .month(currentMonth)
      .date(currentDay)
      .subtract(1, 'month')
      .startOf('month')

    const isAfterStartDate = props.startDate ? prevMonth.isBefore(moment.utc(props.startDate), 'month') : false
    return isAfterStartDate
  }, [currentYear, currentMonth, currentDay, props.startDate])

  const updateDateFromTimestamp = useCallback(
    (timestamp: number, isDay?: boolean, isChange?: boolean) => {
      const newDate = moment(timestamp).utc()
      if (isChange) props.onChange(newDate.valueOf())
      setCurrentDay(newDate.date())
      setCurrentMonth(newDate.month())
      setCurrentYear(newDate.year())
      if (props.isOnClickClose && isDay) {
        props.onBlur?.()
        handleOnClose()
      }
    },
    [handleOnClose, props]
  )

  useEffect(() => {
    const unixValue = props.value ? moment(props.value).utc() : moment.utc()
    setUnixValue(unixValue)
  }, [props.value])

  useEffect(() => {
    const momentValue = props.value ? moment(props.value).utc() : moment.utc()
    const momentStartDate = props.startDate ? moment(props.startDate).utc() : null
    const momentEndDate = props.endDate ? moment(props.endDate).utc() : null

    if (momentStartDate && momentValue.isBefore(momentStartDate, 'day')) {
      updateDateFromTimestamp(momentStartDate.startOf('day').valueOf(), false, !!props.value)
    } else if (momentEndDate && momentValue.isAfter(momentEndDate, 'day')) {
      updateDateFromTimestamp(momentEndDate.startOf('day').valueOf(), false, !!props.value)
    }
  }, [props.endDate, props.startDate, props.value, updateDateFromTimestamp])

  useEffect(() => {
    if (props.value) {
      const newDate = moment(props.value).utc()
      setCurrentDay(newDate.date())
      setCurrentMonth(newDate.month())
      setCurrentYear(newDate.year())
    }
  }, [props.value])

  const weekDays = useMemo(() => {
    const weekOrder: WeekItem['value'][] = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su']

    return weekOrder.map((key, index) => {
      const found = props.locale.weeks.find(w => w.value === key)
      return {
        index,
        label: found?.localeShort ?? key.toUpperCase()
      }
    })
  }, [props.locale.weeks])
  return (
    <Outside
      onOutsideClick={event => {
        if (isOpen) props?.onBlur?.(event)
        handleOnClose()
      }}
    >
      <DateWrapper
        $size={props.size}
        $genre={props.genre}
        $sx={props.sx}
        $isDisabled={props?.isDisabled}
        $radius={radius}
        $parentListHeight={height}
        onFocus={event => {
          if (props?.isDisabled) return
          if (props.onFocus) props.onFocus?.(event)
          handleOnOpen()
        }}
      >
        <DateStyledInput
          id={props.id}
          name={props.name}
          $genre={props.genre}
          $size={props.size}
          placeholder={props?.placeholder}
          $error={props?.inputProps?.error}
          $isLoading={props?.inputProps?.isLoading}
          $postfixChildren={props?.inputProps?.postfixChildren}
          $prefixChildren={props?.inputProps?.prefixChildren}
          $isBold={props?.inputProps?.isBold}
          disabled={props?.isDisabled}
          $isDisabled={props?.isDisabled}
          $isInputEffect={props?.isInputEffect}
          readOnly={true}
          required={props?.inputProps?.isRequired}
          defaultValue={props?.inputProps?.defaultValue}
          value={currentDateLabel}
          type={props?.inputProps?.type}
          onChange={event => props.inputProps?.onChange && props.inputProps?.onChange(event.target.value)}
          onBlur={props?.inputProps?.onBlur}
          onFocus={props?.inputProps?.onFocus}
          onClick={handleOnOpen}
        />

        <AnimatePresence>
          {isOpen ? (
            <DateDropdownListParent
              initial={{ opacity: 0, height: 0 }}
              animate={{
                height: `${height}px`,
                display: 'flex',
                opacity: 1,
                zIndex: '1'
              }}
              exit={{
                height: '0px',
                display: 'none',
                opacity: 0,
                zIndex: 'auto'
              }}
              transition={{ duration: 0.2 }}
              $genre={props.genre}
              $size={props.size}
              style={{
                height: `${height}px`
              }}
            >
              <DateDropdownList $isInputEffect={props.isInputEffect} $genre={props.genre} $size={props.size}>
                <Stack
                  sx={{
                    default: {
                      justifyContent: 'space-between',
                      alignItems: 'center'
                    }
                  }}
                >
                  <Button
                    type="button"
                    isRadius
                    icons={[
                      {
                        name: 'Arrow2',
                        type: 'id',
                        turn: 90
                      }
                    ]}
                    isWidthAsHeight
                    genre={props.genre}
                    size={'small'}
                    onClick={() => !isBlockDecreaseMonth && decreaseMonth()}
                    isHidden={isBlockDecreaseMonth}
                  />
                  <Stack sx={{ default: { gap: '8px' } }}>
                    <SelectMonth
                      monthsLocale={props.locale.months}
                      genre={props.genre}
                      size={'small'}
                      inputProps={undefined}
                      value={moment
                        .utc()
                        .year(currentYear)
                        .month(currentMonth)
                        .date(currentDay)
                        .startOf('day')
                        .utc()
                        .valueOf()}
                      onChange={(timestamp: number) => {
                        updateDateFromTimestamp(timestamp, false, true)
                      }}
                      startDate={props.startDate}
                      endDate={props.endDate}
                      width="90px"
                    />
                    <SelectYear
                      genre={props.genre}
                      size={'small'}
                      value={moment
                        .utc()
                        .year(currentYear)
                        .month(currentMonth)
                        .date(currentDay)
                        .startOf('day')
                        .utc()
                        .valueOf()}
                      onChange={(timestamp: number) => {
                        updateDateFromTimestamp(timestamp, false, true)
                      }}
                      startDate={props.startDate}
                      endDate={props.endDate}
                      width="70px"
                    />
                  </Stack>
                  <Button
                    type="button"
                    onClick={() => !isBlockIncreaseMonth && increaseMonth()}
                    isWidthAsHeight
                    isRadius
                    icons={[
                      {
                        name: 'Arrow2',
                        type: 'id',
                        turn: -90
                      }
                    ]}
                    genre={props.genre}
                    size={'small'}
                    isHidden={isBlockIncreaseMonth}
                  />
                </Stack>
                <DateDropdownDays $rows={rows}>
                  {weekDays.map((e, index) => (
                    <DateDropdownDayOfWeek
                      $isToday={false}
                      $isWeekend={false}
                      type="button"
                      $genre={props.genre}
                      $size={props.size}
                      $row={daysInMonth[0].weekOfMonth - 1}
                      $column={index + 1}
                      key={index}
                    >
                      {e.label}
                    </DateDropdownDayOfWeek>
                  ))}
                  {daysInMonth.map(day =>
                    !day.isDisabled ? (
                      <DateDropdownDay
                        type="button"
                        $genre={props.genre}
                        $size={props.size}
                        $row={day.weekOfMonth + 1}
                        $column={day.dayOfWeek}
                        key={day.value}
                        onClick={() => updateDateFromTimestamp(day.value, true, true)}
                        $isToday={day.isToday}
                        $isWeekend={day.isWeekend}
                        $isChoice={day.value === unixValue.valueOf()}
                        $isCurrentMonth={day.isCurrentMonth}
                      >
                        <Ripple color={theme.colors.date[props.genre].color.rest} />
                        {day.labelNumber}
                      </DateDropdownDay>
                    ) : null
                  )}
                </DateDropdownDays>
              </DateDropdownList>
            </DateDropdownListParent>
          ) : null}
        </AnimatePresence>
      </DateWrapper>
      {props?.inputProps?.error ? (
        <ErrorMessage {...props?.inputProps?.error} size={props?.inputProps?.error.size ?? props.size} />
      ) : null}
    </Outside>
  )
}
