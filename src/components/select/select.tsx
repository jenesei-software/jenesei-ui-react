import gsap from 'gsap'
import { memo, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { useTheme } from 'styled-components'

import {
  DropdownList,
  DropdownOption,
  SelectProps,
  SelectStyledInput,
  SelectWrapper,
} from '.'
import { KEY_SIZE_DATA } from '../../theme'

export const Select = memo((props: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  const listRef = useRef<HTMLUListElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  const theme = useTheme()

  const maxViewLength = useMemo(() => 5, [])

  const optionsLength = useMemo(
    () => props.option.length,
    [props.option.length],
  )

  const height = useMemo(
    () =>
      KEY_SIZE_DATA[props.inputProps.size].height *
      (optionsLength < maxViewLength ? optionsLength : maxViewLength),
    [optionsLength, maxViewLength, props.inputProps.size],
  )

  const radius = useMemo(
    () => KEY_SIZE_DATA[props.inputProps.size].radius,
    [props.inputProps.size],
  )

  const onFocus = useCallback(() => {
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
            const list = listRef.current
            if (!list) return

            const listRect = list.getBoundingClientRect()
            const children = Array.from(list.children)

            const visibleChildren = children.filter((child) => {
              const childRect = child.getBoundingClientRect()
              return (
                childRect.top <
                  listRect.bottom +
                    KEY_SIZE_DATA[props.inputProps.size].height &&
                childRect.bottom >
                  listRect.top - KEY_SIZE_DATA[props.inputProps.size].height
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
          },
        })
      },
    })
  }, [height, isAnimating, isOpen, props.inputProps.size, theme.colors.focus])

  const onBlur = useCallback(() => {
    if (isAnimating) return
    if (!isOpen) return

    setIsAnimating(true)

    const list = listRef.current
    if (!list) return
    const listRect = list.getBoundingClientRect()
    const children = Array.from(list.children)

    const visibleChildren = children.filter((child) => {
      const childRect = child.getBoundingClientRect()
      return (
        childRect.top <
          listRect.bottom + KEY_SIZE_DATA[props.inputProps.size].height &&
        childRect.bottom >
          listRect.top - KEY_SIZE_DATA[props.inputProps.size].height
      )
    })

    const visibleChildrenArray = visibleChildren.reverse()

    const nonVisibleChildren = children.filter(
      (child) => !visibleChildren.includes(child),
    )

    gsap.to(listRef.current, {
      outline: 'none',
      duration: 0.2,
      onComplete: () => {
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
      },
    })
  }, [isAnimating, isOpen, props.inputProps.size, radius])

  const handleMouseDown = useCallback((event: MouseEvent) => {
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
        onBlur()
      }
    }

    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [onBlur])
  return (
    <SelectWrapper
      tabIndex={0}
      $width={props.inputProps.width}
      onFocus={onFocus}
      onBlur={onBlur}
    >
      <SelectStyledInput
        $isActive={props.inputProps.isActive}
        $isError={props.inputProps.isError}
        $isLoading={props.inputProps.isLoading}
        $postfixChildren={props.inputProps?.postfixChildren}
        $prefixChildren={props.inputProps?.prefixChildren}
        $genre={props.inputProps.genre}
        $size={props.inputProps.size}
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
        onClick={onFocus}
      />
      <DropdownList
        ref={listRef}
        $genre={props.inputProps.genre}
        $isShowScroll={optionsLength > maxViewLength}
      >
        {props.option.map((option) => (
          <DropdownOption
            $isActive={props.inputProps.isActive}
            $isError={props.inputProps.isError}
            $isLoading={props.inputProps.isLoading}
            $postfixChildren={props.inputProps?.postfixChildren}
            $prefixChildren={props.inputProps?.prefixChildren}
            $genre={props.inputProps.genre}
            $size={props.inputProps.size}
            $isBold={props.inputProps.isBold}
            key={option.id}
          >
            {option.value}
          </DropdownOption>
        ))}
      </DropdownList>
    </SelectWrapper>
  )
})
