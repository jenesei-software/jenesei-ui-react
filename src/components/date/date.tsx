import gsap from 'gsap'
import moment from 'moment'
import { FocusEventHandler, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Ripple } from 'react-ripple-click'

import { Button } from '@components/button'
import { Stack } from '@components/flex'
import { InputErrorMessage } from '@components/input'
import { SelectMonth, SelectYear } from '@components/select'

import { KEY_SIZE_DATA } from '@theme/index'

import {
  DateDayProps,
  DateDropdownDay,
  DateDropdownDayOfWeek,
  DateDropdownDays,
  DateDropdownList,
  DateDropdownListParent,
  DateProps,
  DateStyledInput,
  DateWrapper,
} from '.'

function countSevens(number: number) {
  const divisor = 7
  const count = Math.floor(number / divisor)
  const remainder = number % divisor

  return count + remainder
}

export const DatePicker = (props: DateProps) => {
  const unixValue = props.value ? moment(props.value).utc() : moment.utc()
  const [currentMonth, setCurrentMonth] = useState(unixValue.clone().month())
  const [currentYear, setCurrentYear] = useState(unixValue.clone().year())
  const [currentDay, setCurrentDay] = useState(unixValue.clone().date())

  const currentDateLabel = useMemo(() => {
    return props.value ? moment(props.value).utc().format('D MMMM YYYY') : ''
  }, [props.value])

  const daysInMonth: DateDayProps[] = useMemo(() => {
    const today = moment.utc() // Get today's date in UTC

    const startOfMonth = moment.utc().year(currentYear).month(currentMonth).startOf('month')
    const endOfMonth = moment.utc().year(currentYear).month(currentMonth).endOf('month')

    const days = []

    // Days before the start of the month to fill the first week
    const daysToAddBefore = startOfMonth.isoWeekday() - 1 // isoWeekday: 1 = Mon, ..., 7 = Sun
    if (daysToAddBefore > 0) {
      for (let i = daysToAddBefore; i > 0; i--) {
        const day = startOfMonth.clone().subtract(i, 'days')
        days.push({
          value: day.valueOf(),
          labelString: day.format('dd'),
          labelNumber: day.date(),
          dayOfWeek: day.isoWeekday(),
          isWeekend: day.isoWeekday() === 6 || day.isoWeekday() === 7,
          weekOfMonth: Math.ceil((days.length + 1) / 7), // Week of the month index
          isToday: day.isSame(today, 'day'),
          isCurrentMonth: false,
        })
      }
    }

    // Days in the current month
    const currentDate = startOfMonth.clone()
    while (currentDate <= endOfMonth) {
      days.push({
        value: currentDate.valueOf(),
        labelString: currentDate.format('dd'),
        labelNumber: currentDate.date(),
        dayOfWeek: currentDate.isoWeekday(),
        isWeekend: currentDate.isoWeekday() === 6 || currentDate.isoWeekday() === 7,
        weekOfMonth: Math.ceil((days.length + 1) / 7), // Week of the month index
        isToday: currentDate.isSame(today, 'day'),
        isCurrentMonth: true,
      })
      currentDate.add(1, 'day')
    }

    // Days after the end of the month to fill the last week
    const daysToAddAfter = 7 - endOfMonth.isoWeekday()
    if (daysToAddAfter > 0) {
      for (let i = 1; i <= daysToAddAfter; i++) {
        const day = endOfMonth.clone().add(i, 'days')
        days.push({
          value: day.valueOf(),
          labelString: day.format('dd'),
          labelNumber: day.date(),
          dayOfWeek: day.isoWeekday(),
          isWeekend: day.isoWeekday() === 6 || day.isoWeekday() === 7,
          weekOfMonth: Math.ceil((days.length + 1) / 7), // Week of the month index
          isToday: day.isSame(today, 'day'),
          isCurrentMonth: false,
        })
      }
    }

    // Sorting days by value (timestamp) to ensure chronological order
    days.sort((a, b) => a.value - b.value)

    return days
  }, [currentMonth, currentYear])

  // // Увеличение дня
  // const increaseDay = () => {
  //   const newDate = moment
  //     .utc()
  //     .year(currentYear)
  //     .month(currentMonth)
  //     .date(currentDay)
  //     .add(1, 'day')
  //   setCurrentDay(newDate.date())
  //   setCurrentMonth(newDate.month())
  //   setCurrentYear(newDate.year())
  // }

  // // Уменьшение дня
  // const decreaseDay = () => {
  //   const newDate = moment
  //     .utc()
  //     .year(currentYear)
  //     .month(currentMonth)
  //     .date(currentDay)
  //     .subtract(1, 'day')
  //   setCurrentDay(newDate.date())
  //   setCurrentMonth(newDate.month())
  //   setCurrentYear(newDate.year())
  // }

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

  // // Увеличение года
  // const increaseYear = () => {
  //   const newDate = moment
  //     .utc()
  //     .year(currentYear)
  //     .month(currentMonth)
  //     .date(currentDay)
  //     .add(1, 'year')
  //   setCurrentDay(newDate.date())
  //   setCurrentMonth(newDate.month())
  //   setCurrentYear(newDate.year())
  // }

  // // Уменьшение года
  // const decreaseYear = () => {
  //   const newDate = moment
  //     .utc()
  //     .year(currentYear)
  //     .month(currentMonth)
  //     .date(currentDay)
  //     .subtract(1, 'year')
  //   setCurrentDay(newDate.date())
  //   setCurrentMonth(newDate.month())
  //   setCurrentYear(newDate.year())
  // }
  const updateDateFromTimestamp = (timestamp: number, isDay?: boolean) => {
    const newDate = moment(timestamp).utc()
    props.onChange(newDate.valueOf())
    setCurrentDay(newDate.date())
    setCurrentMonth(newDate.month())
    setCurrentYear(newDate.year())
    if (props.isOnClickClose && isDay) {
      handleOnBlurEasy()
    }
  }
  useEffect(() => {
    if (props.value) {
      const newDate = moment(props.value).utc()
      setCurrentDay(newDate.date())
      setCurrentMonth(newDate.month())
      setCurrentYear(newDate.year())
    }
  }, [props.value])
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const listRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const parentListRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const rows = useMemo(() => countSevens(daysInMonth.length) + 1, [daysInMonth.length])

  const height = useMemo(
    () => 40 + rows * 28 + (rows - 1) * 6 + KEY_SIZE_DATA[props.size].padding * 2,
    [props.size, rows],
  )

  const radius = useMemo(() => KEY_SIZE_DATA[props.size].radius, [props.size])

  const handleListOptionOpenEffect = useCallback(() => {
    const list = listRef.current
    if (!list) return

    setIsAnimating(false)
    setIsOpen(true)
  }, [])

  const handleListOptionCloseEffect = useCallback(() => {
    const list = listRef.current
    if (!list) return

    gsap.to(inputRef.current, {
      duration: 0.1,
    })
    gsap.to(parentListRef.current, {
      height: '0px',
      display: 'none',
      zIndex: 'auto',
      duration: 0.1,
      ease: 'power2.out',
      onComplete: () => {
        setIsAnimating(false)
        setIsOpen(false)
        wrapperRef.current?.blur()
        inputRef.current?.blur()
      },
    })
  }, [])

  const handleOnOpen = useCallback(() => {
    gsap.to(inputRef.current, {
      duration: 0.1,
      onComplete: () => {
        gsap.to(parentListRef.current, {
          height: `${height}px`,
          display: 'flex',
          zIndex: '1',
          duration: 0.1,
          onComplete: () => {
            handleListOptionOpenEffect()
          },
        })
      },
    })
  }, [handleListOptionOpenEffect, height])

  const handleOnFocusEasy = useCallback(() => {
    if (isAnimating) return
    if (isOpen) return

    setIsAnimating(true)

    handleOnOpen()
  }, [handleOnOpen, isAnimating, isOpen])

  const handleOnFocus: FocusEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      if (props.onFocus) props.onFocus(event)
      handleOnFocusEasy()
    },
    [handleOnFocusEasy, props],
  )

  useEffect(() => {
    if (isOpen) handleOnOpen()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height])

  const handleOnBlurEasy = useCallback(() => {
    if (isAnimating) return
    if (!isOpen) return

    setIsAnimating(true)

    gsap.to(parentListRef.current, {
      duration: 0.2,
      onComplete: () => {
        handleListOptionCloseEffect()
      },
    })
  }, [handleListOptionCloseEffect, isAnimating, isOpen])

  const handleOnBlur: FocusEventHandler<HTMLInputElement> = useCallback(
    (event) => {
      if (props.onBlur && event) props.onBlur(event)
      handleOnBlurEasy()
    },
    [handleOnBlurEasy, props],
  )

  const handleMouseDown = useCallback((event: MouseEvent) => {
    if (parentListRef.current && parentListRef.current.contains(event.target as Node)) {
      event.preventDefault()
    }
  }, [])

  useEffect(() => {
    document.addEventListener('mousedown', handleMouseDown)
    return () => {
      document.removeEventListener('mousedown', handleMouseDown)
    }
  }, [handleMouseDown])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        parentListRef.current &&
        inputRef.current &&
        !parentListRef.current.contains(event.target as Node) &&
        !inputRef.current.contains(event.target as Node)
      ) {
        handleOnBlurEasy()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleOnBlurEasy])

  useEffect(() => {
    if (isOpen) {
      handleListOptionOpenEffect()
    }
  }, [handleListOptionOpenEffect, isOpen])
  return (
    <>
      <DateWrapper
        $genre={props.genre}
        $width={props.width}
        tabIndex={0}
        $radius={radius}
        $parentListHeight={height}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        ref={wrapperRef}
      >
        <DateStyledInput
          id={props.id}
          name={props.name}
          $genre={props.genre}
          $size={props.size}
          placeholder={props?.placeholder}
          $isError={props?.inputProps?.isError}
          $isLoading={props?.inputProps?.isLoading}
          $postfixChildren={props?.inputProps?.postfixChildren}
          $prefixChildren={props?.inputProps?.prefixChildren}
          $isBold={props?.inputProps?.isBold}
          disabled={props?.inputProps?.isDisabled}
          readOnly={true}
          required={props?.inputProps?.isRequired}
          defaultValue={props?.inputProps?.defaultValue}
          value={currentDateLabel}
          type={props?.inputProps?.type}
          onChange={(event) => props.inputProps?.onChange && props.inputProps?.onChange(event.target.value)}
          onBlur={props?.inputProps?.onBlur}
          onFocus={props?.inputProps?.onFocus}
          onClick={handleOnFocusEasy}
          ref={inputRef}
        />

        <DateDropdownListParent
          ref={parentListRef}
          $genre={props.genre}
          $size={props.size}
          style={{
            height: `${height}px`,
          }}
        >
          <DateDropdownList $genre={props.genre} $size={props.size} ref={listRef}>
            <Stack justifyContent="space-between" alignItems="center">
              <>
                <Button
                  type="button"
                  isRadius
                  iconName="ArrowLeft2"
                  width="asHeight"
                  genre={props.genre}
                  size={'small'}
                  onClick={decreaseMonth}
                />
                <Stack gap="8px">
                  <>
                    <SelectMonth
                      genre={props.genre}
                      size={'small'}
                      inputProps={undefined}
                      value={moment.utc().year(currentYear).month(currentMonth).startOf('month').valueOf()}
                      onChange={updateDateFromTimestamp}
                      lang={'ru'}
                      width="90px"
                    />
                    <SelectYear
                      genre={props.genre}
                      size={'small'}
                      value={moment.utc().year(currentYear).startOf('year').valueOf()}
                      onChange={updateDateFromTimestamp}
                      startDate={props.startDate}
                      endDate={props.endDate}
                      lang={'ru'}
                      width="70px"
                    />
                  </>
                </Stack>
                <Button
                  type="button"
                  onClick={increaseMonth}
                  width="asHeight"
                  isRadius
                  iconName="ArrowRight2"
                  genre={props.genre}
                  size={'small'}
                />
              </>
            </Stack>
            <DateDropdownDays $rows={rows}>
              {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((e, index) => (
                <DateDropdownDayOfWeek
                  type="button"
                  $genre={props.genre}
                  $size={props.size}
                  $row={daysInMonth[0].weekOfMonth - 1}
                  $column={index + 1}
                  key={index}
                >
                  {e}
                </DateDropdownDayOfWeek>
              ))}
              {daysInMonth.map((day) => (
                <DateDropdownDay
                  type="button"
                  $genre={props.genre}
                  $size={props.size}
                  $row={day.weekOfMonth + 1}
                  $column={day.dayOfWeek}
                  key={day.value}
                  onClick={() => updateDateFromTimestamp(day.value, true)}
                  $isToday={day.isToday}
                  $isWeekend={day.isWeekend}
                  $isChoice={day.value === unixValue.valueOf()}
                  $isCurrentMonth={day.isCurrentMonth}
                >
                  <Ripple />
                  {day.labelNumber}
                </DateDropdownDay>
              ))}
            </DateDropdownDays>
          </DateDropdownList>
        </DateDropdownListParent>
      </DateWrapper>
      {props?.inputProps?.isError && props?.inputProps?.errorMessage && (
        <InputErrorMessage $size={props.size} $width={props.width} $isErrorAbsolute={props.inputProps?.isErrorAbsolute}>
          {props.inputProps?.errorMessage}
        </InputErrorMessage>
      )}
    </>
  )
}
