import { useVirtualizer } from '@tanstack/react-virtual'
import gsap from 'gsap'
import {
  ReactNode,
  memo,
  useCallback,
  useEffect,
  useMemo,
  useRef,
  useState,
} from 'react'
import { useTheme } from 'styled-components'

import { Button } from '@components/button'
import { Checkbox, CheckboxProps } from '@components/checkbox'
import { InputChildrenProps } from '@components/input'

import {
  KEY_SIZE_DATA,
  TJeneseiThemeGenreInput,
  TJeneseiThemeSize,
} from '@theme/index'

import {
  DropdownErase,
  DropdownFooter,
  DropdownList,
  DropdownListParent,
  DropdownOption,
  DropdownSelectAll,
  ISelectItem,
  SelectProps,
  SelectStyledInput,
  SelectWrapper,
} from '.'

const DEFAULT_MAX_VIEW = 5
const DEFAULT_MIN_VIEW = 5
const DEFAULT_OVERSCAN = 1

export const Select = <T extends object & ISelectItem>(
  props: SelectProps<T>,
) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isAll, setIsAll] = useState(
    props?.footer?.selectAll?.defaultValue ?? false,
  )
  const listRef = useRef<HTMLUListElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const parentListRef = useRef<HTMLDivElement>(null)

  const theme = useTheme()

  const maxViewLength = useMemo(
    () => props.maxView ?? DEFAULT_MAX_VIEW,
    [props.maxView],
  )
  const minViewLength = useMemo(
    () => props.minView ?? DEFAULT_MIN_VIEW,
    [props.minView],
  )
  const optionsLength = useMemo(
    () => props.option.length,
    [props.option.length],
  )
  const isFooter: boolean = useMemo(() => !!props?.footer, [props.footer])
  const isErase: boolean = useMemo(() => !!props?.footer?.erase, [props.footer])
  const isSelectAll: boolean = useMemo(
    () => !!props?.footer?.selectAll,
    [props.footer],
  )
  const sizeHeight = useMemo(
    () => KEY_SIZE_DATA[props.size].height,
    [props.size],
  )
  const height = useMemo(
    () =>
      sizeHeight *
        (optionsLength < maxViewLength ? minViewLength : maxViewLength) +
      (isFooter ? sizeHeight : 0),
    [sizeHeight, optionsLength, maxViewLength, minViewLength, isFooter],
  )
  const radius = useMemo(() => KEY_SIZE_DATA[props.size].radius, [props.size])

  const isSelectedItem = useCallback(
    (option: T): boolean => {
      return isAll || (props.value ?? []).includes(option)
    },
    [isAll, props.value],
  )

  const handleEraseOnClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()
      event.stopPropagation()
      props.footer?.erase?.onCLick
        ? props.footer?.erase?.onCLick()
        : props.onChange([])
      setIsAll(false)
    },
    [props],
  )

  const handleSelectAllOnClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.preventDefault()
      event.stopPropagation()
      if (props.inputProps.value !== '') {
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
    [isAll, props],
  )

  const handleOptionOnClick = useCallback(
    (option: T) => {
      if (props.isMultu) {
        if (isAll) {
          const index = props.option.findIndex(
            (selectedItems) => selectedItems.value === option.value,
          )
          const newValue = [
            ...props.option.slice(0, index),
            ...props.option.slice(index + 1),
          ]
          props.onChange(newValue)
        } else {
          const index = props.value.findIndex(
            (selectedItems) => selectedItems.value === option.value,
          )

          if (
            index === -1 &&
            (!props.maxView || props.value.length < props.maxView)
          ) {
            const newValues = [...(props.value ?? []), option]
            props.onChange(newValues)

            if (newValues.length == props.option.length) {
              return setIsAll(true)
            }
          } else if (index !== -1) {
            const newValue = [
              ...props.value.slice(0, index),
              ...props.value.slice(index + 1),
            ]
            props.onChange(newValue)
          }
        }
      } else {
        props.onChange([option])
      }

      return setIsAll(false)
    },
    [isAll, props],
  )

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
      borderBottomLeftRadius: `${radius}px`,
      borderBottomRightRadius: `${radius}px`,
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
  }, [radius])

  const handleOnFocus = useCallback(() => {
    if (isAnimating) return
    if (isOpen) return

    setIsAnimating(true)

    gsap.to(inputRef.current, {
      duration: 0.1,
      borderBottomLeftRadius: `0px`,
      borderBottomRightRadius: `0px`,
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
  }, [
    handleListOptionOpenEffect,
    height,
    isAnimating,
    isOpen,
    theme.colors.focus,
  ])

  const handleOnBlur = useCallback(() => {
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
        handleOnBlur()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [handleOnBlur])

  useEffect(() => {
    if (isOpen) {
      handleListOptionOpenEffect()
    }
  }, [handleListOptionOpenEffect, isOpen, props.option])

  const listVirtualizer = useVirtualizer({
    count: optionsLength,
    estimateSize: props.getEstimateSize
      ? props.getEstimateSize
      : () => sizeHeight,
    getScrollElement: () => parentListRef.current,
    overscan: DEFAULT_OVERSCAN,
    paddingEnd: isFooter ? sizeHeight : 0,
  })

  const handleFetchNextPage = useCallback(
    (containerRefElement?: HTMLDivElement | null) => {
      if (containerRefElement) {
        const { scrollHeight, scrollTop, clientHeight } = containerRefElement
        if (
          scrollHeight - scrollTop - clientHeight < height &&
          !props.isFetching &&
          props.fetchNextPage
        ) {
          props.fetchNextPage()
        }
      }
    },
    [height, props],
  )

  return (
    <SelectWrapper
      tabIndex={0}
      $genre={props.genre}
      $radius={radius}
      $width={props.width ?? props.inputProps.width}
      $parentListHeight={height}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    >
      <SelectStyledInput
        $isError={props.inputProps.isError}
        $isLoading={props.inputProps.isLoading}
        $postfixChildren={props.inputProps?.postfixChildren}
        $prefixChildren={props.inputProps?.prefixChildren}
        $genre={props.genre ?? props.inputProps.genre}
        $size={props.size}
        $isBold={props.inputProps.isBold}
        disabled={props.inputProps.isDisabled}
        readOnly={props.inputProps.isReadOnly}
        required={props.inputProps.isRequired}
        defaultValue={props.inputProps.defaultValue}
        value={props.inputProps.value ?? ''}
        placeholder={props.inputProps.placeholder}
        type={props.inputProps.type}
        onChange={(event) =>
          props.inputProps.onChange &&
          props.inputProps.onChange(event.target.value)
        }
        onBlur={props.inputProps.onBlur}
        onFocus={props.inputProps.onFocus}
        onClick={handleOnFocus}
        ref={inputRef}
      />
      <DropdownListParent
        ref={parentListRef}
        $genre={props.genre}
        $isShowScroll={optionsLength > maxViewLength}
        $isFooter={isFooter}
        $size={props.size}
        onScroll={(e) => handleFetchNextPage(e.target as HTMLDivElement)}
      >
        <DropdownList
          ref={listRef}
          style={{
            height: `${listVirtualizer.getTotalSize()}px`,
            minHeight: `${height}px`,
          }}
        >
          {listVirtualizer.getVirtualItems().map((virtualRow) => {
            const item = props.option[virtualRow.index]
            const checked = isSelectedItem(item)
            return (
              <ContainerDropdownOption
                onClick={() => handleOptionOnClick(item)}
                key={virtualRow.index}
                genre={props.genre ?? props.optionProps.genre}
                size={props.size}
                checkboxProps={props.checkboxProps}
                checked={checked}
                isError={props.optionProps?.isError}
                isLoading={props.optionProps?.isLoading}
                isCustomIcon={props.optionProps?.isCustomIcon}
                isBold={props.optionProps?.isBold}
                postfixChildren={props.optionProps?.postfixChildren}
                prefixChildren={props.optionProps?.prefixChildren}
                virtualRowSize={virtualRow.size}
                virtualRowStart={virtualRow.start}
                label={item.label}
              />
            )
          })}
          {isFooter && (
            <DropdownFooter
              $isErase={isErase}
              $isSelectAll={isSelectAll}
              $genre={props.genre}
              $size={props.size}
            >
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
                  <Button
                    isFullSize
                    genre={props.genre}
                    onClick={handleEraseOnClick}
                    size={'medium'}
                    isHiddenBorder
                  >
                    {props.footer!.erase.label}
                  </Button>
                </DropdownErase>
              )}
            </DropdownFooter>
          )}
        </DropdownList>
      </DropdownListParent>
    </SelectWrapper>
  )
}

export const ContainerDropdownOption = memo(
  (params: {
    checkboxProps: CheckboxProps
    genre: keyof TJeneseiThemeGenreInput
    size: TJeneseiThemeSize
    onClick: () => void
    isError?: boolean
    isLoading?: boolean
    isCustomIcon?: boolean
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
        $isCheckboxProps={!!params.checkboxProps}
        $isError={params.isError}
        $isLoading={params.isLoading}
        $isCustomIcon={params.isCustomIcon}
        $postfixChildren={params.postfixChildren}
        $prefixChildren={params.prefixChildren}
        $genre={params.genre}
        $size={params.size}
        $isBold={params.isBold}
        style={{
          height: `${params.virtualRowSize}px`,
          transform: `translateY(${params.virtualRowStart}px)`,
        }}
      >
        {!!params.checkboxProps && (
          <Checkbox {...params.checkboxProps} checked={params.checked} />
        )}
        {params.label}
      </DropdownOption>
    )
  },
)
