import { useVirtualizer } from '@tanstack/react-virtual'
import moment from 'moment'
import {
  FC,
  KeyboardEvent,
  Ref,
  RefObject,
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react'

import { ListLanguage, MapThemeList } from '@local/consts'
import { useOverflowing } from '@local/hooks/use-overflowing'
import { useOverflowingInContainer } from '@local/hooks/use-overflowing-in-container'
import { ErrorMessage } from '@local/styles/error'
import { KEY_SIZE_DATA } from '@local/theme'

import {
  ContainerDropdownListOptionProps,
  ContainerSelectListOptionProps,
  DropdownList,
  DropdownListOption,
  DropdownListOptionIcon,
  DropdownListParent,
  ISelectItem,
  ISelectLanguageOption,
  ISelectMapThemeOption,
  SelectLanguageProps,
  SelectList,
  SelectListOption,
  SelectMapThemeProps,
  SelectMonthProps,
  SelectMonthsProps,
  SelectProps,
  SelectWrapper,
  SelectYearProps
} from '.'
import { Popover, usePopover } from '../popover'
import { Typography } from '../typography'

const DEFAULT_MAX_VIEW = 5
const DEFAULT_MIN_VIEW = 5
const DEFAULT_OVERSCAN = 1
const DEFAULT_LABEL_EMPTY_OPTION = 'No options'

export const Select = <T extends object & ISelectItem>(props: SelectProps<T>) => {
  const { isOpen, close, open, refReference, refFloating, floatingStyles } = usePopover({
    placement: 'bottom-start',
    offset: 0,
    mode: 'independence',
    isClickOutside: true,
    isWidthAsContent: true,
    isDisabled: props?.isDisabled
  })
  const refInput = useRef<HTMLInputElement>(null)
  const parentListRef = useRef<HTMLDivElement>(null)

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

  const isAll = useMemo(() => props.value.length == props.option.length, [props.option.length, props.value.length])
  const isHaveOption = useMemo(() => !!props.option.length, [props.option.length])
  const isHaveValue = useMemo(() => !!props.value.length, [props.value.length])

  const isShowScroll = useMemo(() => optionsLength > maxViewLength, [maxViewLength, optionsLength])
  const isSelectedItem = useCallback(
    (option: T): boolean => {
      return isAll || props.value.includes(option.value)
    },
    [isAll, props.value]
  )

  const listVirtualizer = useVirtualizer({
    count: optionsLength,
    estimateSize: props.getEstimateSize ? props.getEstimateSize : () => sizeHeight,
    getScrollElement: () => parentListRef.current,
    overscan: DEFAULT_OVERSCAN,
    paddingEnd: 0
  })

  const onClickOption = useCallback(
    (option: T) => {
      if (props.isOnClickOptionClose) {
        close()
      }

      let newValues: (string | number)[] = []

      const optionValue = option.value

      if (props.isMulti) {
        const index = props.value.findIndex(val => val === optionValue)
        const isFind = index !== -1

        if (isFind) {
          newValues = [...props.value.slice(0, index), ...props.value.slice(index + 1)]
        } else {
          newValues = props.isSortValueAsOption ? [...props.value, optionValue] : [...props.value, optionValue]
        }

        props.onChange(newValues)
      } else {
        const index = props.value.findIndex(val => val === optionValue)
        const isFind = index !== -1

        if (isFind && !props.isStayValueAfterSelect) {
          newValues = [...props.value.slice(0, index), ...props.value.slice(index + 1)]
        } else {
          newValues = [optionValue]
        }

        props.onChange(newValues)
      }

      if (props.isOnClickOptionClose) {
        close()
      }
    },
    [close, props]
  )

  const onScrollNextPage = useCallback(
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
  const { isOverflowing, ref } = useOverflowing({
    isCheckSize: !props.isWrapSelectOption,
    dependencies: [props.value.length]
  })
  const [notOverflowingLength, setNotOverflowingLength] = useState<number | null>(null)
  useLayoutEffect(() => {
    if (props.isWrapSelectOption) return
    if (isOverflowing) {
      setNotOverflowingLength(prevValue => {
        if (prevValue !== null && prevValue <= props.value.length) {
          return prevValue
        }
        return props.value.length - 1
      })
    } else {
      setNotOverflowingLength(prevValue => {
        if (prevValue && prevValue >= props.value.length) {
          return null
        }
        return prevValue
      })
    }
  }, [isOverflowing, props.isWrapSelectOption, props.value.length])
  return (
    <>
      <SelectWrapper
        tabIndex={0}
        $isNotShowHoverStyle={props?.isNotShowHoverStyle}
        $size={props.size}
        $genre={props.genre}
        $sx={props.sx}
        $isOpen={isOpen}
        ref={refReference as RefObject<HTMLDivElement | null>}
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
      >
        {isHaveValue ? (
          <SelectList
            $isOverflowing={isOverflowing}
            ref={ref as Ref<HTMLUListElement> | undefined}
            $size={props.size}
            tabIndex={-1}
            $isWrapSelectOption={props.isWrapSelectOption}
          >
            {notOverflowingLength}
            {props.value.map((value, index) => {
              const item = props.option.find(option => option.value === value)
              if (notOverflowingLength !== null && notOverflowingLength < index + 1) return null
              if (!item) return null
              const isChecked = isSelectedItem(item)
              return (
                <ContainerSelectListOption
                  key={index}
                  isChecked={isChecked}
                  onClick={() => onClickOption(item)}
                  item={item}
                  genre={props.genre}
                  size={props.size}
                  isBold={props.isBold}
                  isWrapSelectOption={props.isWrapSelectOption}
                  isNotShowHoverStyle={props.isNotShowHoverStyle}
                  isCenter={props.isCenter}
                />
              )
            })}
          </SelectList>
        ) : null}
      </SelectWrapper>
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
        ref={refFloating}
        isOpen={isOpen}
      >
        <DropdownListParent
          tabIndex={-1}
          ref={parentListRef}
          onScroll={e => onScrollNextPage(e.target as HTMLDivElement)}
        >
          {isHaveOption ? (
            <DropdownList
              tabIndex={-1}
              style={{
                height: `${listVirtualizer.getTotalSize()}px`,
                minHeight: `${height}px`
              }}
            >
              {listVirtualizer.getVirtualItems().map(virtualRow => {
                const item = props.option[virtualRow.index]
                const isChecked = isSelectedItem(item)
                return (
                  <ContainerDropdownListOption
                    key={virtualRow.index}
                    virtualRowSize={virtualRow.size}
                    virtualRowStart={virtualRow.start}
                    isChecked={isChecked}
                    onClick={() => onClickOption(item)}
                    item={item}
                    genre={props.genre}
                    size={props.size}
                    isBold={props.isBold}
                    isNotShowHoverStyle={props.isNotShowHoverStyle}
                    isCenter={props.isCenter}
                    isShowScroll={isShowScroll}
                    isShowDropdownOptionIcon={props.isShowDropdownOptionIcon}
                  />
                )
              })}
            </DropdownList>
          ) : null}
        </DropdownListParent>
      </Popover>
      {props?.error ? <ErrorMessage {...props.error} size={props?.error.size ?? props.size} /> : null}
    </>
  )
}

const ContainerDropdownListOptionComponent = <T extends object & ISelectItem>(
  props: ContainerDropdownListOptionProps<T>
) => {
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
      style={{
        height: `${props.virtualRowSize}px`,
        transform: `translateY(${props.virtualRowStart}px)`
      }}
      $isCenter={props.isCenter}
      $isNotShowHoverStyle={props.isNotShowHoverStyle}
      $item={props.item}
      $genre={props.genre}
      $size={props.size}
      $isBold={props.isBold}
      $isChecked={props.isChecked}
      $isShowScroll={props.isShowScroll}
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

const ContainerSelectListOptionComponent = <T extends object & ISelectItem>(
  props: ContainerSelectListOptionProps<T>
) => {
  return (
    <SelectListOption
      tabIndex={-1}
      onClick={props.onClick}
      $isWrapSelectOption={props.isWrapSelectOption}
      $isCenter={props.isCenter}
      $isNotShowHoverStyle={props.isNotShowHoverStyle}
      $item={props.item}
      $genre={props.genre}
      $size={props.size}
      $isBold={props.isBold}
      $isChecked={props.isChecked}
    >
      <Typography
        sx={{
          default: {
            size: 16,
            line: 1
          }
        }}
      >
        {props.item.label}
      </Typography>
    </SelectListOption>
  )
}

export const ContainerDropdownListOption = memo(ContainerDropdownListOptionComponent)
export const ContainerSelectListOption = memo(ContainerSelectListOptionComponent)

export const SelectLanguage: FC<SelectLanguageProps> = props => {
  const { value, onChange } = props

  const option = ListLanguage

  const [viewOption, setViewOption] = useState<ISelectLanguageOption[]>(option)
  // const [query, setQuery] = useState<string>('')
  // const [isEmptyOption, setIsEmptyOption] = useState<boolean>(false)

  // const handleSelectChange = (value: (number | string)[]) => {
  //   props.onChange(option[0]?.value.toString())
  //   setQuery('')
  // }
  // const handleQueryChange = useCallback(
  //   (value: string) => {
  //     setQuery(value)
  //     props.onChange('')
  //     if (value === '') {
  //       setIsEmptyOption(option.length === 0)
  //       setViewOption(option)
  //     } else {
  //       const filteredOptions = option.filter(option =>
  //         Object.values(option).some(field => field?.toString().toLowerCase().includes(value.toLowerCase()))
  //       )
  //       setViewOption(filteredOptions)
  //       setIsEmptyOption(filteredOptions.length === 0)
  //     }
  //   },
  //   [option, props]
  // )

  const handleSelectChange = (value: (number | string)[]) => {
    if (value.length === 0) onChange(null)
    onChange(value[0].toString())
  }
  const valueLocal = useMemo(() => {
    if (!value) return []
    return [value]
  }, [value])

  return (
    <Select<ISelectLanguageOption>
      {...props}
      option={viewOption}
      minView={1}
      maxView={8}
      value={valueLocal}
      onChange={handleSelectChange}
    />
  )
}

export const SelectMonth: FC<SelectMonthProps> = props => {
  const { value, onChange, startDate, endDate, monthsLocale, isShortLabel } = props

  const year = moment(value).utc().year()

  const option = useMemo(() => {
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
        isDisabled: !!isDisabled,
        monthValue: monthItem.value
      }
    })
  }, [monthsLocale, year, startDate, endDate, isShortLabel])

  const handleSelectChange = (value: (number | string)[]) => {
    if (value.length === 0) onChange(null)
    onChange(+value[0])
  }
  const valueLocal = useMemo(() => {
    if (!value) return []
    return [value]
  }, [value])

  return (
    <Select<ISelectLanguageOption>
      {...props}
      option={option}
      minView={1}
      maxView={5}
      isShowDropdownOptionIcon
      value={valueLocal}
      onChange={handleSelectChange}
    />
  )
}
export const SelectMonths: FC<SelectMonthsProps> = props => {
  const { value, onChange, startDate, endDate, monthsLocale, isShortLabel } = props

  const year = moment(value).utc().year()

  const option = useMemo(() => {
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
        isDisabled: !!isDisabled,
        monthValue: monthItem.value
      }
    })
  }, [monthsLocale, year, startDate, endDate, isShortLabel])

  const handleSelectChange = (value: (number | string)[]) => {
    if (value.length === 0) onChange([])
    onChange(value.map(e => +e))
  }

  return (
    <Select<ISelectLanguageOption>
      {...props}
      option={option}
      minView={1}
      maxView={5}
      isMulti
      isShowDropdownOptionIcon
      value={value}
      onChange={handleSelectChange}
    />
  )
}

export const SelectYear: FC<SelectYearProps> = props => {
  const { value, onChange, startDate, endDate, sortOrder = 'desc' } = props

  const startYear = moment(startDate).utc().year()
  const endYear = moment(endDate).utc().year()

  const option = useMemo(() => {
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

  const handleSelectChange = (value: (number | string)[]) => {
    if (value.length === 0) onChange(null)
    onChange(+value[0])
  }

  const valueLocal = useMemo(() => {
    if (!value) return []
    return [value]
  }, [value])

  return (
    <Select<ISelectLanguageOption>
      {...props}
      option={option}
      minView={1}
      maxView={5}
      isOnClickOptionClose
      isShowDropdownOptionIcon
      value={valueLocal}
      onChange={handleSelectChange}
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
