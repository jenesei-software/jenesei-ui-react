import gsap from 'gsap'
import moment from 'moment'
import {
  FocusEventHandler,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'

import { InputErrorMessage } from '@components/input'
import { Typography } from '@components/typography'

import { KEY_SIZE_DATA } from '@theme/index'

import {
  DateDropdownDay,
  DateDropdownDays,
  DateDropdownList,
  DateDropdownListParent,
  DateProps,
  DateStyledInput,
  DateWrapper,
} from '.'

export const DatePicker = (props: DateProps) => {
  const unixValue = props.value ? moment.unix(props.value).utc() : moment.utc()
  const [currentMonth, setCurrentMonth] = useState(unixValue.clone().month())
  const [currentYear, setCurrentYear] = useState(unixValue.clone().year())
  const [currentDay, setCurrentDay] = useState(unixValue.clone().date())

  const currentMonthLabel = useMemo(() => {
    return moment.utc().month(currentMonth).format('MMMM')
  }, [currentMonth])

  const daysInMonth = useMemo(() => {
    const startOfMonth = moment
      .utc()
      .year(currentYear)
      .month(currentMonth)
      .startOf('month')
    const endOfMonth = moment
      .utc()
      .year(currentYear)
      .month(currentMonth)
      .endOf('month')

    const days = []

    // Определяем начало недели первого дня месяца
    const startOfFirstWeek = startOfMonth.clone().startOf('isoWeek')

    // Определяем номер недели для первого дня месяца
    const startWeekNumber = startOfMonth.isoWeek()

    // Добавляем дни перед началом месяца, чтобы заполнить первую неделю
    const daysToAddBefore = startOfMonth.isoWeekday() - 1 // isoWeekday: 1 = Пн, ..., 7 = Вс
    for (let i = daysToAddBefore; i > 0; i--) {
      const day = startOfMonth.clone().subtract(i, 'days')
      days.push({
        value: day.unix(),
        labelString: day.format('dd'),
        labelNumber: day.date(),
        dayOfWeek: day.isoWeekday(),
        isWeekend: day.isoWeekday() === 6 || day.isoWeekday() === 7, // Проверка на выходной
        weekOfMonth: day.isoWeek() - startWeekNumber + 1, // Номер недели в месяце
      })
    }

    // Добавляем дни самого месяца
    const currentDate = startOfMonth.clone()
    while (currentDate <= endOfMonth) {
      days.push({
        value: currentDate.unix(),
        labelString: currentDate.format('dd'), // Сокращение дня недели (Пн, Вт и т.д.)
        labelNumber: currentDate.date(), // Число дня месяца
        dayOfWeek: currentDate.isoWeekday(), // Номер дня недели (1 = Пн, 7 = Вс)
        isWeekend:
          currentDate.isoWeekday() === 6 || currentDate.isoWeekday() === 7, // Проверка на выходной
        weekOfMonth: currentDate.isoWeek() - startWeekNumber + 1, // Номер недели в месяце
      })
      currentDate.add(1, 'day')
    }

    // Добавляем дни после конца месяца, чтобы заполнить последнюю неделю
    const daysToAddAfter = 7 - endOfMonth.isoWeekday()
    for (let i = 1; i <= daysToAddAfter; i++) {
      const day = endOfMonth.clone().add(i, 'days')
      days.push({
        value: day.unix(),
        labelString: day.format('dd'),
        labelNumber: day.date(),
        dayOfWeek: day.isoWeekday(),
        isWeekend: day.isoWeekday() === 6 || day.isoWeekday() === 7, // Проверка на выходной
        weekOfMonth: day.isoWeek() - startWeekNumber + 1, // Номер недели в месяце
      })
    }

    return days
  }, [currentMonth, currentYear])

  // Увеличение дня
  const increaseDay = () => {
    const newDate = moment
      .utc()
      .year(currentYear)
      .month(currentMonth)
      .date(currentDay)
      .add(1, 'day')
    setCurrentDay(newDate.date())
    setCurrentMonth(newDate.month())
    setCurrentYear(newDate.year())
  }

  // Уменьшение дня
  const decreaseDay = () => {
    const newDate = moment
      .utc()
      .year(currentYear)
      .month(currentMonth)
      .date(currentDay)
      .subtract(1, 'day')
    setCurrentDay(newDate.date())
    setCurrentMonth(newDate.month())
    setCurrentYear(newDate.year())
  }

  // Увеличение месяца
  const increaseMonth = () => {
    const newDate = moment
      .utc()
      .year(currentYear)
      .month(currentMonth)
      .date(currentDay)
      .add(1, 'month')
    setCurrentDay(newDate.date())
    setCurrentMonth(newDate.month())
    setCurrentYear(newDate.year())
  }

  // Уменьшение месяца
  const decreaseMonth = () => {
    const newDate = moment
      .utc()
      .year(currentYear)
      .month(currentMonth)
      .date(currentDay)
      .subtract(1, 'month')
    setCurrentDay(newDate.date())
    setCurrentMonth(newDate.month())
    setCurrentYear(newDate.year())
  }

  // Увеличение года
  const increaseYear = () => {
    const newDate = moment
      .utc()
      .year(currentYear)
      .month(currentMonth)
      .date(currentDay)
      .add(1, 'year')
    setCurrentDay(newDate.date())
    setCurrentMonth(newDate.month())
    setCurrentYear(newDate.year())
  }

  // Уменьшение года
  const decreaseYear = () => {
    const newDate = moment
      .utc()
      .year(currentYear)
      .month(currentMonth)
      .date(currentDay)
      .subtract(1, 'year')
    setCurrentDay(newDate.date())
    setCurrentMonth(newDate.month())
    setCurrentYear(newDate.year())
  }
  const updateDateFromTimestamp = (timestamp: number) => {
    const newDate = moment.unix(timestamp).utc()
    props.onChange(timestamp)
    setCurrentDay(newDate.date())
    setCurrentMonth(newDate.month())
    setCurrentYear(newDate.year())
  }
  useEffect(() => {
    if (props.value) {
      const newDate = moment.unix(props.value).utc()
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

  const sizeHeight = useMemo(
    () => KEY_SIZE_DATA[props.size].height,
    [props.size],
  )
  const height = useMemo(() => sizeHeight * 5, [sizeHeight])

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
      duration: 0.1,
      ease: 'power2.out',
      onComplete: () => {
        setIsAnimating(false)
        setIsOpen(false)
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
    if (
      parentListRef.current &&
      parentListRef.current.contains(event.target as Node)
    ) {
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
  console.log('daysInMonth', daysInMonth)
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
          readOnly={props?.inputProps?.isReadOnly}
          required={props?.inputProps?.isRequired}
          defaultValue={props?.inputProps?.defaultValue}
          value={props?.inputProps?.value ?? ''}
          type={props?.inputProps?.type}
          onChange={(event) =>
            props.inputProps?.onChange &&
            props.inputProps?.onChange(event.target.value)
          }
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
          <DateDropdownList
            $genre={props.genre}
            $size={props.size}
            ref={listRef}
          >
            <Typography size={12}>{currentYear}</Typography>
            <Typography size={12}>{currentMonthLabel}</Typography>
            <DateDropdownDays>
              {daysInMonth.map((day) => (
                <DateDropdownDay
                  $row={day.weekOfMonth}
                  $column={day.dayOfWeek}
                  key={day.value}
                >
                  {day.labelNumber}
                </DateDropdownDay>
              ))}
            </DateDropdownDays>
            {/* <button onClick={increaseDay}>Increase Day</button>
            <button onClick={decreaseDay}>Decrease Day</button>
            <button onClick={increaseMonth}>Increase Month</button>
            <button onClick={decreaseMonth}>Decrease Month</button>
            <button onClick={increaseYear}>Increase Year</button>
            <button onClick={decreaseYear}>Decrease Year</button>
            <button onClick={() => updateDateFromTimestamp(1672531199)}>
              Update to Timestamp (e.g., 1672531199)
            </button> */}
          </DateDropdownList>
        </DateDropdownListParent>
      </DateWrapper>
      {props?.inputProps?.isError && props?.inputProps?.errorMessage && (
        <InputErrorMessage
          $width={props.width}
          $isErrorAbsolute={props.inputProps?.isErrorAbsolute}
        >
          {props.inputProps?.errorMessage}
        </InputErrorMessage>
      )}
    </>
  )
}
