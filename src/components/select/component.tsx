import { useVirtualizer } from '@tanstack/react-virtual'
import moment from 'moment'
import { FC, KeyboardEvent, RefObject, memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'

import { ListLanguage, MapThemeList } from '@local/consts'
import { ErrorMessage } from '@local/styles/error'
import { KEY_SIZE_DATA } from '@local/theme'

import {
  ContainerDropdownOptionProps,
  DropdownList,
  DropdownListOption,
  DropdownListOptionIcon,
  DropdownListParent,
  ISelectItem,
  ISelectLanguageOption,
  ISelectMapThemeOption,
  SelectDateProps,
  SelectLanguageProps,
  SelectMapThemeProps,
  SelectProps,
  SelectWrapper,
  SelectYearProps
} from '.'
import { Popover, usePopover } from '../popover'

const DEFAULT_MAX_VIEW = 5
const DEFAULT_MIN_VIEW = 5
const DEFAULT_OVERSCAN = 1
const DEFAULT_LABEL_EMPTY_OPTION = 'No options'

export const Select = <T extends object & ISelectItem>(props: SelectProps<T>) => {
  const { isOpen, close, open, reference, floating, floatingStyles } = usePopover({
    placement: 'bottom-start',
    offset: 0,
    mode: 'independence',
    isClickOutside: true,
    isWidthAsContent: true,
    isDisabled: props?.isDisabled
  })
  const refInput = useRef<HTMLInputElement>(null)
  const parentListRef = useRef<HTMLDivElement>(null)

  const isHaveOption = useMemo(() => !!props.option.length, [props.option.length])
  const isAll = useMemo(() => props.value.length == props.option.length, [props.option.length, props.value.length])
  const maxViewLength = useMemo(() => props.maxView ?? DEFAULT_MAX_VIEW, [props.maxView])
  const minViewLength = useMemo(() => props.minView ?? DEFAULT_MIN_VIEW, [props.minView])
  const optionsLength = useMemo(() => props.option.length, [props.option.length])
  const sizeHeight = useMemo(() => KEY_SIZE_DATA[props.size].height, [props.size])
  const height = useMemo(
    () =>
      sizeHeight *
      (optionsLength < maxViewLength ? (optionsLength < minViewLength ? minViewLength : optionsLength) : maxViewLength),
    [sizeHeight, optionsLength, maxViewLength, minViewLength]
  )
  const radius = useMemo(() => KEY_SIZE_DATA[props.size].radius, [props.size])

  const isSelectedItem = useCallback(
    (option: T): boolean => {
      return isAll || (props.value ?? []).includes(option)
    },
    [isAll, props.value]
  )

  const handleOptionOnClick = useCallback(
    (option: T) => {
      if (props.isOnClickOptionClose) {
        close()
      }
      let newValues: T[] = []

      if (props.isMulti) {
        const index = props.value.findIndex(selectedItems => selectedItems.value === option.value)
        const isFind = index !== -1
        if (isFind) {
          newValues = [...props.value.slice(0, index), ...props.value.slice(index + 1)]
        } else {
          newValues = [...(props.value ?? []), option]
        }
        props.onChange(newValues)
      } else {
        const index = props.value.findIndex(selectedItems => selectedItems.value === option.value)
        const isFind = index !== -1
        if (isFind && !props.isStayValueAfterSelect) {
          newValues = [...props.value.slice(0, index), ...props.value.slice(index + 1)]
        } else {
          newValues = [option]
        }
        props.onChange(newValues)
      }

      if (props.isOnClickOptionClose) {
        close()
      }
    },
    [close, props]
  )

  const listVirtualizer = useVirtualizer({
    count: optionsLength,
    estimateSize: props.getEstimateSize ? props.getEstimateSize : () => sizeHeight,
    getScrollElement: () => parentListRef.current,
    overscan: DEFAULT_OVERSCAN,
    paddingEnd: 0
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
        tabIndex={0}
        $isNotShowHoverStyle={props?.isNotShowHoverStyle}
        $size={props.size}
        $genre={props.genre}
        $sx={props.sx}
        $isOpen={isOpen}
        ref={reference as RefObject<HTMLDivElement | null>}
        onClick={() => {
          open()
        }}
        onFocus={() => {
          open()
        }}
        animate={{
          '--after-height': isOpen ? `${height}px` : `0px`,
          borderBottomLeftRadius: isOpen ? `0px` : `${radius}px`,
          borderBottomRightRadius: isOpen ? `0px` : `${radius}px`
        }}
        transition={{ duration: 0.2 }}
      ></SelectWrapper>
      <Popover
        sx={theme => ({
          default: {
            background: theme.colors.input[props.genre].background.rest,
            borderRadius: `0px 0px ${radius}px ${radius}px`,
            padding: '0px',
            maxHeight: `${height}px`
          }
        })}
        size={props.size}
        genre={props.genre}
        floatingStyles={floatingStyles}
        ref={floating}
        isOpen={isOpen}
      >
        <DropdownListParent
          tabIndex={-1}
          ref={parentListRef}
          onScroll={e => handleFetchNextPage(e.target as HTMLDivElement)}
        >
          <DropdownList
            tabIndex={-1}
            style={{
              height: `${listVirtualizer.getTotalSize()}px`,
              minHeight: `${height}px`
            }}
          >
            {isHaveOption
              ? listVirtualizer.getVirtualItems().map(virtualRow => {
                  const item = props.option[virtualRow.index]
                  const isChecked = isSelectedItem(item)
                  return (
                    <ContainerDropdownOption
                      key={virtualRow.index}
                      virtualRowSize={virtualRow.size}
                      virtualRowStart={virtualRow.start}
                      isChecked={isChecked}
                      onClick={() => handleOptionOnClick(item)}
                      item={item}
                      genre={props.genre}
                      size={props.size}
                      isBold={props.isBold}
                      isNotShowHoverStyle={props.isNotShowHoverStyle}
                      isCenter={props.isCenter}
                      isShowDropdownOptionIcon={props.isShowDropdownOptionIcon}
                    />
                  )
                })
              : null}
          </DropdownList>
        </DropdownListParent>
      </Popover>
      {props?.error ? <ErrorMessage {...props.error} size={props?.error.size ?? props.size} /> : null}
    </>
  )
}

const ContainerDropdownOptionComponent = <T extends object & ISelectItem>(props: ContainerDropdownOptionProps<T>) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLLIElement>) => {
    if (event.key === 'Enter') {
      props.onClick()
    }
  }
  return (
    <DropdownListOption
      tabIndex={0}
      onClick={props.onClick}
      onKeyDown={handleKeyDown}
      $isCenter={props.isCenter}
      $isNotShowHoverStyle={props.isNotShowHoverStyle}
      $item={props.item}
      $genre={props.genre}
      $size={props.size}
      $isBold={props.isBold}
      $isChecked={props.isChecked}
      style={{
        height: `${props.virtualRowSize}px`,
        transform: `translateY(${props.virtualRowStart}px)`
      }}
    >
      {props.item.label}
      {props.isShowDropdownOptionIcon && (
        <DropdownListOptionIcon
          tabIndex={-1}
          size={props.size}
          type="checkbox"
          name="Arrow"
          $genre={props.genre}
          $checked={props.isChecked}
          $size={props.size}
        />
      )}
    </DropdownListOption>
  )
}

export const ContainerDropdownOption = memo(ContainerDropdownOptionComponent)

export const SelectLanguage: FC<SelectLanguageProps> = props => {
  const option = ListLanguage

  const [viewOption, setViewOption] = useState<ISelectLanguageOption[]>(option)
  const [query, setQuery] = useState<string>('')
  const [isEmptyOption, setIsEmptyOption] = useState<boolean>(false)

  const handleSelectChange = (option: ISelectLanguageOption[]) => {
    props.onChange(option[0]?.value.toString())
    setQuery('')
  }
  const handleQueryChange = useCallback(
    (value: string) => {
      setQuery(value)
      props.onChange('')
      if (value === '') {
        setIsEmptyOption(option.length === 0)
        setViewOption(option)
      } else {
        const filteredOptions = option.filter(option =>
          Object.values(option).some(field => field?.toString().toLowerCase().includes(value.toLowerCase()))
        )
        setViewOption(filteredOptions)
        setIsEmptyOption(filteredOptions.length === 0)
      }
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
      // isEmptyOption={isEmptyOption}
      minView={1}
      maxView={8}
      // isOnClickOptionClose
      value={value ? [value] : []}
      onChange={handleSelectChange}
      // inputProps={{
      //   ...props.inputProps,
      //   variety: 'standard',
      //   isReadOnly: true,
      //   value: (value?.placeholder as string) ?? query,
      //   onChange: handleQueryChange
      // }}
    />
  )
}

export const SelectMonth: FC<SelectDateProps> = props => {
  const { value, onChange, startDate, endDate, monthsLocale, isShortLabel } = props

  const year = moment(value).utc().year()

  const months = useMemo(() => {
    return monthsLocale.map(monthItem => {
      const monthIndex = moment().month(monthItem.value).month()

      const monthMoment = moment.utc().year(year).month(monthIndex).startOf('month')
      const isDisabled =
        (startDate && monthMoment.isBefore(moment.utc(startDate), 'month')) ||
        (endDate && monthMoment.isAfter(moment.utc(endDate), 'month'))

      return {
        value: monthMoment.valueOf(),
        label: isShortLabel ? monthItem.localeShort : monthItem.localeLong,
        placeholder: isShortLabel ? monthItem.localeShort : monthItem.localeLong,
        search: `${monthItem.localeLong.toLowerCase()}, ${monthIndex + 1}`,
        isDisabled,
        monthValue: monthItem.value
      }
    })
  }, [monthsLocale, year, startDate, endDate, isShortLabel])

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
      // inputProps={{
      //   ...props.inputProps,
      //   isCenter: true,
      //   variety: 'standard',
      //   value: selectedMonth?.placeholder ?? props.placeholder,
      //   isReadOnly: true
      // }}
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
      // optionProps={{
      //   isCenter: true,
      //   variety: 'standard',
      //   ...props.optionProps
      // }}
      // inputProps={{
      //   ...props.inputProps,
      //   isCenter: true,
      //   isNiceNumber: true,
      //   variety: 'standard',
      //   value: selectedYear?.placeholder ?? props.placeholder,
      //   isReadOnly: true
      // }}
    />
  )
}

export const SelectMapTheme: FC<SelectMapThemeProps> = props => {
  const options = useMemo(() => MapThemeList, [])
  const optionsNormalize = useMemo(
    () => MapThemeList.map(e => ({ label: e.name, value: e.name, placeholder: e.name })),
    []
  )

  const [viewOption, setViewOption] = useState<ISelectMapThemeOption[]>(optionsNormalize)
  const [query, setQuery] = useState<string>('')
  const [isEmptyOption, setIsEmptyOption] = useState<boolean>(false)

  const handleSelectChange = (option: ISelectMapThemeOption[]) => {
    const findOption = options.find(e => e.name === option[0].value)
    if (findOption) {
      props.onChange(findOption)
    } else {
      props.onChange(null)
    }
    setQuery('')
  }
  const handleQueryChange = useCallback(
    (value: string) => {
      setQuery(value)
      props.onChange(null)
      if (value === '') {
        setIsEmptyOption(optionsNormalize.length === 0)
        setViewOption(optionsNormalize)
      } else {
        const filteredOptions = optionsNormalize.filter(option =>
          Object.values(option).some(field => field?.toString().toLowerCase().includes(value.toLowerCase()))
        )
        setViewOption(filteredOptions)
        setIsEmptyOption(filteredOptions.length === 0)
      }
    },
    [optionsNormalize, props]
  )

  const [value, setValue] = useState<ISelectMapThemeOption | undefined>(
    optionsNormalize.find(e => e.value === props.value.name)
  )
  useEffect(() => {
    if (value?.value !== props.value.name) setValue(optionsNormalize.find(e => e.value === props.value.name))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [options, props.value])

  return (
    <Select<ISelectMapThemeOption>
      {...props}
      option={viewOption}
      // isEmptyOption={isEmptyOption}
      minView={1}
      maxView={8}
      isOnClickOptionClose
      value={value ? [value] : []}
      onChange={handleSelectChange}
      // inputProps={{
      //   ...props.inputProps,
      //   variety: 'standard',
      //   isReadOnly: true,
      //   value: (value?.placeholder as string) ?? query,
      //   onChange: handleQueryChange
      // }}
    />
  )
}
