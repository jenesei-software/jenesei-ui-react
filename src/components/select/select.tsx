import { useVirtualizer } from '@tanstack/react-virtual'
import gsap from 'gsap'
import moment from 'moment'
import React, { FC, FocusEventHandler, ReactNode, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { Button } from '@local/components/button'
import { InputChildrenProps } from '@local/components/input'
import { Typography } from '@local/components/typography'
import { ListLanguage } from '@local/consts'
import { ErrorMessage } from '@local/styles/base'
import { KEY_SIZE_DATA, TJeneseiThemeGenreInput, TJeneseiThemeSize } from '@local/theme'

import {
  DropdownErase,
  DropdownFooter,
  DropdownList,
  DropdownListParent,
  DropdownOption,
  DropdownOptionIcon,
  DropdownOptionLayout,
  DropdownSelectAll,
  ISelectItem,
  ISelectLanguageOption,
  SelectDateProps,
  SelectInputIcon,
  SelectLanguageProps,
  SelectProps,
  SelectStyledInput,
  SelectWrapper,
  SelectYearProps
} from '.'

const DEFAULT_MAX_VIEW = 5
const DEFAULT_MIN_VIEW = 5
const DEFAULT_OVERSCAN = 1

export const Select = <T extends object & ISelectItem>(props: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isAll, setIsAll] = useState(props?.footer?.selectAll?.defaultValue ?? false)
  const listRef = useRef<HTMLUListElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const parentListRef = useRef<HTMLDivElement>(null)
  const wrapperRef = useRef<HTMLDivElement>(null)

  const maxViewLength = useMemo(() => props.maxView ?? DEFAULT_MAX_VIEW, [props.maxView])
  const minViewLength = useMemo(() => props.minView ?? DEFAULT_MIN_VIEW, [props.minView])
  const optionsLength = useMemo(() => props.option.length, [props.option.length])
  const isFooter: boolean = useMemo(() => !!props?.footer, [props.footer])
  const isErase: boolean = useMemo(() => !!props?.footer?.erase, [props.footer])
  const isSelectAll: boolean = useMemo(() => !!props?.footer?.selectAll, [props.footer])
  const sizeHeight = useMemo(() => KEY_SIZE_DATA[props.size].height, [props.size])
  const height = useMemo(
    () =>
      sizeHeight *
        (optionsLength < maxViewLength
          ? optionsLength < minViewLength
            ? minViewLength
            : optionsLength
          : maxViewLength) +
      (isFooter ? sizeHeight : 0),
    [sizeHeight, optionsLength, maxViewLength, minViewLength, isFooter]
  )

  const radius = useMemo(() => KEY_SIZE_DATA[props.size].radius, [props.size])

  const isSelectedItem = useCallback(
    (option: T): boolean => {
      return isAll || (props.value ?? []).includes(option)
    },
    [isAll, props.value]
  )

  const handleEraseOnClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()
      event.stopPropagation()
      if (props.footer?.erase?.onCLick) {
        props.footer.erase.onCLick()
      } else {
        props.onChange([])
      }
      setIsAll(false)
    },
    [props]
  )

  const handleSelectAllOnClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()
      event.stopPropagation()
      if (props?.inputProps?.value !== '') {
        return props.onChange(props.option)
      }
      if (isAll) {
        setIsAll(false)
        props.onChange(props.option)
      } else {
        if (props.footer?.selectAll?.onCLick) {
          props.footer?.selectAll?.onCLick()
        } else {
          setIsAll(true)
        }
      }
    },
    [isAll, props]
  )

  const handleListOptionCloseEffect = useCallback(() => {
    const list = listRef.current
    if (!list) return

    gsap.to(inputRef.current, {
      duration: 0.1,
      borderBottomLeftRadius: `${radius}px`,
      borderBottomRightRadius: `${radius}px`
    })
    gsap.to(wrapperRef.current, {
      duration: 0.1,
      '--after-height': `0px`,
      zIndex: 'auto'
    })
    gsap.to(parentListRef.current, {
      height: '0px',
      zIndex: 'auto',
      display: 'none',
      duration: 0.1,
      ease: 'power2.out',
      onComplete: () => {
        setIsAnimating(false)
        setIsOpen(false)
        wrapperRef?.current?.blur()
        inputRef?.current?.blur()
      }
    })
  }, [radius])

  const handleOnBlurEasy = useCallback(() => {
    if (isAnimating) return
    if (!isOpen) return

    setIsAnimating(true)

    gsap.to(parentListRef.current, {
      duration: 0.2,
      onComplete: () => {
        handleListOptionCloseEffect()
      }
    })
  }, [handleListOptionCloseEffect, isAnimating, isOpen])

  const handleOnBlur: FocusEventHandler<HTMLInputElement> = useCallback(
    event => {
      if (props?.isDisabled) return
      if (props.onBlur && event) props.onBlur(event)
      handleOnBlurEasy()
    },
    [handleOnBlurEasy, props]
  )

  const handleOptionOnClick = useCallback(
    (option: T) => {
      if (props.isOnClickOptionClose) {
        handleOnBlurEasy()
      }
      if (props.isMulti) {
        if (isAll) {
          const index = props.option.findIndex(selectedItems => selectedItems.value === option.value)
          const newValue = [...props.option.slice(0, index), ...props.option.slice(index + 1)]
          props.onChange(newValue)
        } else {
          const index = props.value.findIndex(selectedItems => selectedItems.value === option.value)

          if (index === -1 && (!props.maxView || props.value.length < props.maxView)) {
            const newValues = [...(props.value ?? []), option]
            props.onChange(newValues)

            if (newValues.length == props.option.length) {
              return setIsAll(true)
            }
          } else if (index !== -1) {
            const newValue = [...props.value.slice(0, index), ...props.value.slice(index + 1)]
            props.onChange(newValue)
          }
        }
      } else {
        props.onChange([option])
      }

      return setIsAll(false)
    },
    [handleOnBlurEasy, isAll, props]
  )

  const handleListOptionOpenEffect = useCallback(() => {
    const list = listRef.current
    if (!list) return

    setIsAnimating(false)
    setIsOpen(true)
  }, [])

  const handleOnOpen = useCallback(() => {
    gsap.to(inputRef.current, {
      duration: 0.1,
      borderBottomLeftRadius: `0px`,
      borderBottomRightRadius: `0px`,
      onComplete: () => {
        gsap.to(wrapperRef.current, {
          duration: 0.1,
          zIndex: '10',
          '--after-height': `${height + 1}px`
        })
        gsap.to(parentListRef.current, {
          height: `${height + 1}px`,
          display: 'flex',
          zIndex: '1',
          duration: 0.1,
          onComplete: () => {
            handleListOptionOpenEffect()
          }
        })
      }
    })
  }, [handleListOptionOpenEffect, height])

  const handleOnFocusEasy = useCallback(() => {
    if (isAnimating) return
    if (isOpen) return

    setIsAnimating(true)

    handleOnOpen()
  }, [handleOnOpen, isAnimating, isOpen])

  const handleOnFocus: FocusEventHandler<HTMLInputElement> = useCallback(
    event => {
      if (props?.isDisabled) return
      if (props.onFocus) props.onFocus(event)
      handleOnFocusEasy()
    },
    [handleOnFocusEasy, props]
  )

  useEffect(() => {
    if (isOpen) handleOnOpen()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [height])

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
  }, [handleListOptionOpenEffect, isOpen, props.option])

  const listVirtualizer = useVirtualizer({
    count: optionsLength,
    estimateSize: props.getEstimateSize ? props.getEstimateSize : () => sizeHeight,
    getScrollElement: () => parentListRef.current,
    overscan: DEFAULT_OVERSCAN,
    paddingEnd: isFooter ? sizeHeight : 0
  })

  const handleFetchNextPage = useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement
        if (scrollHeight - scrollTop - clientHeight < height && !props.isFetching && props.fetchNextPage) {
          props.fetchNextPage()
        }
      }
    },
    [height, props]
  )

  return (
    <>
      <SelectWrapper
        $genre={props.genre}
        $width={props.width}
        tabIndex={0}
        $radius={radius}
        $isDisabled={props?.isDisabled}
        $parentListHeight={isOpen ? height : 0}
        onFocus={handleOnFocus}
        onBlur={handleOnBlur}
        ref={wrapperRef}
      >
        <SelectStyledInput
          id={props.id}
          name={props.name}
          $genre={props.genre}
          $size={props.size}
          placeholder={props.placeholder}
          $isError={props?.isError}
          $isLoading={props?.inputProps?.isLoading}
          $postfixChildren={props?.inputProps?.postfixChildren}
          $prefixChildren={props.inputProps?.prefixChildren}
          $isBold={props?.inputProps?.isBold}
          disabled={props?.isDisabled}
          $isDisabled={props?.isDisabled}
          readOnly={props?.inputProps?.isReadOnly}
          required={props?.inputProps?.isRequired}
          defaultValue={props?.inputProps?.defaultValue}
          value={props?.inputProps?.value ?? ''}
          type={props?.inputProps?.type}
          onChange={event => props?.inputProps?.onChange && props?.inputProps?.onChange(event.target.value)}
          onBlur={props?.inputProps?.onBlur}
          onFocus={props?.inputProps?.onFocus}
          onClick={handleOnFocusEasy}
          ref={inputRef}
        />
        {props.isShowSelectInputIcon && (
          <SelectInputIcon
            size={props.size}
            type="curved"
            name="Select"
            $genre={props.genre}
            $checked={isOpen}
            $size={props.size}
          />
        )}
        <DropdownListParent
          ref={parentListRef}
          $genre={props.genre}
          $isShowScroll={optionsLength > maxViewLength}
          $isFooter={isFooter}
          $size={props.size}
          onScroll={e => handleFetchNextPage(e.target as HTMLDivElement)}
          style={{
            maxHeight: `${height + 1}px`
          }}
        >
          <DropdownList
            ref={listRef}
            style={{
              height: `${listVirtualizer.getTotalSize()}px`,
              minHeight: `${height}px`
            }}
          >
            {listVirtualizer.getVirtualItems().map(virtualRow => {
              const item = props.option[virtualRow.index]
              const checked = isSelectedItem(item)
              return (
                <ContainerDropdownOption
                  checked={checked}
                  onClick={() => handleOptionOnClick(item)}
                  key={virtualRow.index}
                  virtualRowSize={virtualRow.size}
                  virtualRowStart={virtualRow.start}
                  label={item.label}
                  genre={props.genre}
                  size={props.size}
                  isBold={props.optionProps?.isBold}
                  isError={props.optionProps?.isError}
                  isLoading={props.optionProps?.isLoading}
                  prefixChildren={props.optionProps?.prefixChildren}
                  postfixChildren={props.optionProps?.postfixChildren}
                  isShowDropdownOptionIcon={props.isShowDropdownOptionIcon}
                />
              )
            })}
            {isFooter && (
              <DropdownFooter $isErase={isErase} $isSelectAll={isSelectAll} $genre={props.genre} $size={props.size}>
                {props.footer!.selectAll && (
                  <DropdownSelectAll>
                    <Button
                      isFullSize
                      genre={props.genre}
                      onClick={handleSelectAllOnClick}
                      size={'medium'}
                      isHiddenBorder
                    >
                      {props.footer!.selectAll.label}
                    </Button>
                  </DropdownSelectAll>
                )}
                {props.footer!.erase && (
                  <DropdownErase>
                    <Button isFullSize genre={props.genre} onClick={handleEraseOnClick} size={'medium'} isHiddenBorder>
                      {props.footer!.erase.label}
                    </Button>
                  </DropdownErase>
                )}
              </DropdownFooter>
            )}
          </DropdownList>
        </DropdownListParent>
      </SelectWrapper>
      {props?.isError && props?.errorMessage && (
        <ErrorMessage $size={props.size} $width={props.width} $isErrorAbsolute={props?.isErrorAbsolute}>
          {props.errorMessage}
        </ErrorMessage>
      )}
    </>
  )
}

const ContainerDropdownOptionComponent = (params: {
  genre: keyof TJeneseiThemeGenreInput
  size: TJeneseiThemeSize
  onClick: () => void
  isError?: boolean
  isLoading?: boolean
  isShowDropdownOptionIcon?: boolean
  isBold?: boolean
  postfixChildren?: InputChildrenProps
  prefixChildren?: InputChildrenProps
  checked: boolean
  virtualRowSize: number
  virtualRowStart: number
  label: ReactNode
}) => {
  return (
    <DropdownOption
      onClick={params.onClick}
      $isError={params.isError}
      $isLoading={params.isLoading}
      $postfixChildren={params.postfixChildren}
      $prefixChildren={params.prefixChildren}
      $genre={params.genre}
      $size={params.size}
      $isBold={params.isBold}
      $checked={params.checked}
      style={{
        height: `${params.virtualRowSize}px`,
        transform: `translateY(${params.virtualRowStart}px)`
      }}
    >
      <div style={{ position: 'relative', display: 'contents' }}>
        {params.label}
        {params.isShowDropdownOptionIcon && (
          <DropdownOptionIcon
            size={params.size}
            type="checkbox"
            name="Arrow"
            $genre={params.genre}
            $checked={params.checked}
            $size={params.size}
          />
        )}
        <DropdownOptionLayout
          $genre={params.genre}
          $size={params.size}
          $isBold={params.isBold}
          $checked={params.checked}
        />
      </div>
    </DropdownOption>
  )
}

export const ContainerDropdownOption = memo(ContainerDropdownOptionComponent)

export const SelectLanguage: FC<SelectLanguageProps> = props => {
  const option = ListLanguage

  const [viewOption, setViewOption] = useState<ISelectLanguageOption[]>(option)
  const [query, setQuery] = useState<string>('')
  const handleSelectChange = (option: ISelectLanguageOption[]) => {
    props.onChange(option[0]?.value.toString())
    setQuery('')
  }
  const handleQueryChange = useCallback(
    (value: string) => {
      setQuery(value)
      props.onChange('')
      if (value === '') return setViewOption(option)
      const filteredOptions = option.filter(option =>
        Object.values(option).some(field => field?.toString().toLowerCase().includes(value.toLowerCase()))
      )
      setViewOption(filteredOptions)
    },
    [option, props]
  )

  const [value, setValue] = useState<ISelectLanguageOption | undefined>(option.find(e => e.value === props.value))
  useEffect(() => {
    if (value?.value !== props.value) setValue(option.find(e => e.value === props.value))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [option, props.value])

  return (
    <Select<ISelectLanguageOption>
      {...props}
      option={viewOption}
      minView={1}
      maxView={8}
      isOnClickOptionClose
      value={value ? [value] : []}
      onChange={handleSelectChange}
      inputProps={{
        ...props.inputProps,
        value: (value?.placeholder as string) ?? query,
        onChange: handleQueryChange
      }}
    />
  )
}

export const SelectMonth: FC<SelectDateProps> = props => {
  const { value, onChange, lang, startDate, endDate } = props

  const year = moment(value).utc().year()
  const months = useMemo(() => {
    const format = lang === 'ru' ? 'MMMM' : 'MMMM'
    return moment.months().map((_month, index) => {
      const monthMoment = moment().utc().year(year).month(index).startOf('month')
      const isDisabled =
        (startDate && monthMoment.isBefore(moment.utc(startDate), 'month')) ||
        (endDate && monthMoment.isAfter(moment.utc(endDate), 'month'))

      return {
        value: monthMoment.valueOf(),
        label: <Typography>{monthMoment.format(format)}</Typography>,
        placeholder: monthMoment.format(format),
        search: `${monthMoment.format(format).toLowerCase()}, ${index + 1}`,
        isDisabled: isDisabled
      }
    })
  }, [year, lang, startDate, endDate])

  const handleSelectChange = (option: ISelectLanguageOption[]) => {
    const selectedValue = Number(option[0]?.value)

    const selectedMonthValue = moment(option[0]?.value).utc().month()

    const currentMoment = moment(value).utc()
    const currentYear = currentMoment.year()
    const currentDay = currentMoment.date()

    const newValue = moment().utc().year(currentYear).month(selectedMonthValue).date(currentDay).startOf('day')

    if (newValue.isValid()) {
      onChange(newValue.valueOf())
    } else {
      onChange(selectedValue)
    }
  }

  const selectedMonth = useMemo(() => {
    return months.find(
      month =>
        moment(value).utc().isSameOrAfter(moment(month.value).startOf('month')) &&
        moment(value).utc().isBefore(moment(month.value).endOf('month'))
    )
  }, [months, value])

  return (
    <Select<ISelectLanguageOption>
      {...props}
      option={months.filter(e => !e.isDisabled)}
      minView={1}
      maxView={5}
      isOnClickOptionClose
      value={selectedMonth ? [selectedMonth] : []}
      onChange={handleSelectChange}
      inputProps={{
        ...props.inputProps,
        value: selectedMonth?.placeholder ?? props.placeholder,
        isReadOnly: true
      }}
    />
  )
}

export const SelectYear: FC<SelectYearProps> = props => {
  const { value, onChange, startDate, endDate, sortOrder = 'desc' } = props

  const startYear = moment(startDate).utc().year()
  const endYear = moment(endDate).utc().year()

  const years = useMemo(() => {
    const yearArray = Array.from({ length: endYear - startYear + 1 }, (_, index) => {
      const year = startYear + index
      return {
        value: moment().year(year).utc().startOf('year').valueOf(),
        label: moment().year(year).utc().format('YYYY'),
        placeholder: moment().year(year).utc().format('YYYY'),
        search: `${moment().year(year).utc().format('YYYY').toLowerCase()}`
      }
    })

    return sortOrder === 'asc'
      ? yearArray.sort((a, b) => a.value - b.value)
      : yearArray.sort((a, b) => b.value - a.value)
  }, [endYear, startYear, sortOrder])

  const handleSelectChange = (option: ISelectLanguageOption[]) => {
    const selectedValue = Number(option[0]?.value)

    const selectedYearValue = moment(option[0]?.value).utc().year()

    const currentMoment = moment(value).utc()
    const currentMonth = currentMoment.month()
    const currentDay = currentMoment.date()

    const newValue = moment().utc().year(selectedYearValue).month(currentMonth).date(currentDay).startOf('day')

    if (newValue.isValid()) {
      onChange(newValue.valueOf())
    } else {
      onChange(selectedValue)
    }
  }

  const selectedYear = useMemo(() => {
    return years.find(
      year =>
        moment(value).utc().isSameOrAfter(moment(year.value)) &&
        moment(value).utc().isBefore(moment(year.value).endOf('year'))
    )
  }, [years, value])
  return (
    <Select<ISelectLanguageOption>
      {...props}
      option={years}
      minView={1}
      maxView={5}
      isOnClickOptionClose
      value={selectedYear ? [selectedYear] : []}
      onChange={handleSelectChange}
      inputProps={{
        ...props.inputProps,
        value: selectedYear?.placeholder ?? props.placeholder,
        isReadOnly: true
      }}
    />
  )
}
