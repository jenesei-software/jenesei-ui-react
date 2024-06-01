import gsap from 'gsap'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useTheme } from 'styled-components'

import {
  DropdownErase,
  DropdownFooter,
  DropdownList,
  DropdownOption,
  DropdownSelectAll,
  ISelectItem,
  SelectProps,
  SelectStyledInput,
  SelectWrapper,
} from '.'
import { KEY_SIZE_DATA } from '../../theme'
import { Button } from '../button'
import { Checkbox } from '../checkbox'

const DEFAULT_MAX_VIEW = 5

export const Select = <T extends ISelectItem>(props: SelectProps<T>) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)
  const [isAll, setIsAll] = useState(
    props?.footer?.selectAll?.defaultValue ?? false,
  )
  const listRef = useRef<HTMLUListElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const theme = useTheme()

  const maxViewLength = useMemo(
    () => props.maxView ?? DEFAULT_MAX_VIEW,
    [props.maxView],
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
        (optionsLength < maxViewLength ? optionsLength : maxViewLength) +
      (isFooter ? sizeHeight : 0),
    [sizeHeight, optionsLength, maxViewLength, isFooter],
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
      return setIsAll(false)
    },
    [isAll, props],
  )

  const handleListOptionOpenEffect = useCallback(() => {
    const list = listRef.current
    if (!list) return

    const listRect = list.getBoundingClientRect()
    const children = Array.from(list.children)

    const visibleChildren = children.filter((child) => {
      const childRect = child.getBoundingClientRect()
      return (
        childRect.top < listRect.bottom + sizeHeight &&
        childRect.bottom > listRect.top - sizeHeight
      )
    })

    const nonVisibleChildren = children.filter(
      (child) => !visibleChildren.includes(child),
    )

    gsap.to(visibleChildren, {
      opacity: 1,
      stagger: 0.1,
      duration: 0.1,
      ease: 'power2.out',
      onComplete: () => {
        nonVisibleChildren.forEach((child) => {
          gsap.set(child, { opacity: 1 })
        })
        setIsAnimating(false)
        setIsOpen(true)
      },
    })
  }, [sizeHeight])

  const handleListOptionCloseEffect = useCallback(() => {
    const list = listRef.current
    if (!list) return
    const listRect = list.getBoundingClientRect()
    const children = Array.from(list.children)

    const visibleChildren = children.filter((child) => {
      const childRect = child.getBoundingClientRect()
      return (
        childRect.top < listRect.bottom + sizeHeight &&
        childRect.bottom > listRect.top - sizeHeight
      )
    })

    const visibleChildrenArray = visibleChildren.reverse()

    const nonVisibleChildren = children.filter(
      (child) => !visibleChildren.includes(child),
    )
    gsap.to(visibleChildrenArray, {
      opacity: 0,
      stagger: 0.1,
      duration: 0.05,
      onComplete: () => {
        nonVisibleChildren.forEach((child) => {
          gsap.set(child, { opacity: 0 })
        })
        gsap.to(inputRef.current, {
          duration: 0.1,
          borderBottomLeftRadius: `${radius}px`,
          borderBottomRightRadius: `${radius}px`,
        })
        gsap.to(listRef.current, {
          height: '0px',
          display: 'none',
          duration: 0.1,
          ease: 'power2.out',
          onComplete: () => {
            setIsAnimating(false)
            setIsOpen(false)
          },
        })
      },
    })
  }, [radius, sizeHeight])

  const handleOnFocus = useCallback(() => {
    console.log('handleOnFocus')
    if (isAnimating) return
    if (isOpen) return

    setIsAnimating(true)

    gsap.to(inputRef.current, {
      duration: 0.1,
      borderBottomLeftRadius: `0px`,
      borderBottomRightRadius: `0px`,
      onComplete: () => {
        gsap.to(listRef.current, {
          height: `${height}px`,
          display: 'flex',
          outline: `2px solid ${theme.colors.focus}`,
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
    console.log('handleOnBlur')
    if (isAnimating) return
    if (!isOpen) return

    setIsAnimating(true)

    gsap.to(listRef.current, {
      outline: 'none',
      duration: 0.2,
      onComplete: () => {
        handleListOptionCloseEffect()
      },
    })
  }, [handleListOptionCloseEffect, isAnimating, isOpen])

  const handleMouseDown = useCallback((event: MouseEvent) => {
    console.log('handleMouseDown')
    if (listRef.current && listRef.current.contains(event.target as Node)) {
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
        listRef.current &&
        inputRef.current &&
        !listRef.current.contains(event.target as Node) &&
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

  return (
    <SelectWrapper
      tabIndex={0}
      $width={props.width ?? props.inputProps.width}
      onFocus={handleOnFocus}
      onBlur={handleOnBlur}
    >
      <SelectStyledInput
        $isActive={props.inputProps.isActive}
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
        ref={inputRef}
        onClick={handleOnFocus}
      />
      <DropdownList
        ref={listRef}
        $genre={props.genre}
        $isShowScroll={optionsLength > maxViewLength}
        $isFooter={isFooter}
        $size={props.size}
      >
        {props.option.map((option, id) => (
          <DropdownOption
            $isSelectedItem={isSelectedItem(option)}
            $isCheckboxProps={!!props.checkboxProps}
            $isActive={props.optionProps.isActive}
            $isError={props.optionProps.isError}
            $isLoading={props.optionProps.isLoading}
            $isCustomIcon={props.optionProps.isCustomIcon}
            $postfixChildren={props.optionProps?.postfixChildren}
            $prefixChildren={props.optionProps?.prefixChildren}
            $genre={props.genre ?? props.optionProps.genre}
            $size={props.size}
            $isBold={props.optionProps.isBold}
            key={id}
            onClick={() => handleOptionOnClick(option)}
          >
            {!!props.checkboxProps && (
              <Checkbox
                {...props.checkboxProps}
                checked={isSelectedItem(option)}
              />
            )}
            {option.label}
          </DropdownOption>
        ))}
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
                  genre={props.genre}
                  isActive={isAll}
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
    </SelectWrapper>
  )
}
