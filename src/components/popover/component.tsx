import { Placement, autoUpdate, flip, offset, shift, useFloating } from '@floating-ui/react'
import { AnimatePresence } from 'framer-motion'
import { FC, Ref, useCallback, useEffect, useMemo, useRef, useState } from 'react'
import ReactDOM from 'react-dom'

import { DEFAULT_POPOVER_CLOSE_DELAY, DEFAULT_POPOVER_OFFSET, PopoverProps, PopoverWrapper } from '.'

export const Popover: FC<PopoverProps> = props => {
  return ReactDOM.createPortal(
    <AnimatePresence>
      {props.isOpen && (
        <div
          ref={props.ref as Ref<HTMLDivElement | null>}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            ...props.floatingStyles,
            transform: props.floatingStyles.transform,
            zIndex: 9999
          }}
        >
          <PopoverWrapper
            $genre={props.genre ?? 'black'}
            className={props.className}
            tabIndex={0}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            $sx={props.sx}
            $size={props.size}
            $sxTypography={props.sxTypography}
            $maxHeight={props.maxHeight}
            $maxWidth={props.maxWidth}
          >
            {props.children}
          </PopoverWrapper>
        </div>
      )}
    </AnimatePresence>,
    document.body
  )
}

type UsePopoverProps = {
  placement: Placement
  offset?: number
  isClickOutside?: boolean
  isFloatingHover?: boolean
  hoverCloseDelay?: number
  hoverOffset?: number
  mode?: 'click' | 'hover'
}

export const usePopover = (props: UsePopoverProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const {
    refs,
    floatingStyles,
    update,
    placement: actualPlacement
  } = useFloating({
    open: isOpen,
    placement: props.placement,
    middleware: [offset(props.offset ?? 8), flip(), shift()],
    whileElementsMounted: autoUpdate
  })

  const clickOutsideHandler = useRef<((e: MouseEvent) => void) | null>(null)
  const hoverCloseTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  const hoverOffset = useMemo(
    () => props.hoverOffset ?? props.offset ?? DEFAULT_POPOVER_OFFSET,
    [props.hoverOffset, props.offset]
  )
  const hoverCloseDelay = useMemo(() => props.hoverCloseDelay ?? DEFAULT_POPOVER_CLOSE_DELAY, [props.hoverCloseDelay])

  useEffect(() => {
    const refEl = refs.reference.current
    if (!refEl) return

    if (props.mode === 'click' && refEl instanceof HTMLElement) {
      const handleClick = () => {
        setIsOpen(prev => !prev)
      }
      refEl.addEventListener('click', handleClick)
      return () => {
        refEl.removeEventListener('click', handleClick)
      }
    } else if (props.mode === 'hover' && refEl instanceof HTMLElement) {
      const handleMouseEnter = () => {
        setIsOpen(true)
      }
      const handleMouseLeave = () => {
        if (hoverCloseTimeout.current) clearTimeout(hoverCloseTimeout.current)
        hoverCloseTimeout.current = setTimeout(() => setIsOpen(false), hoverCloseDelay)
      }
      refEl.addEventListener('mouseenter', handleMouseEnter)
      refEl.addEventListener('mouseleave', handleMouseLeave)
      return () => {
        refEl.removeEventListener('mouseenter', handleMouseEnter)
        refEl.removeEventListener('mouseleave', handleMouseLeave)
        if (hoverCloseTimeout.current) clearTimeout(hoverCloseTimeout.current)
      }
    }
  }, [props.mode, refs.reference, hoverCloseDelay])

  useEffect(() => {
    if (!isOpen || !refs.reference.current || !refs.floating.current) return

    const cleanup = autoUpdate(refs.reference.current, refs.floating.current, update)

    if (props.isClickOutside) {
      clickOutsideHandler.current = (e: MouseEvent) => {
        const refEl = refs.reference.current
        const floatingEl = refs.floating.current

        if (
          refEl instanceof HTMLElement &&
          floatingEl instanceof HTMLElement &&
          !refEl.contains(e.target as Node) &&
          !floatingEl.contains(e.target as Node)
        ) {
          setIsOpen(false)
        }
      }

      document.addEventListener('mousedown', clickOutsideHandler.current)
    }

    return () => {
      cleanup()
      if (clickOutsideHandler.current) {
        document.removeEventListener('mousedown', clickOutsideHandler.current)
        clickOutsideHandler.current = null
      }
      if (hoverCloseTimeout.current) {
        clearTimeout(hoverCloseTimeout.current)
      }
    }
  }, [isOpen, refs.reference, refs.floating, update, props.isClickOutside])

  useEffect(() => {
    if (!isOpen || !props.isFloatingHover || !refs.reference.current || !refs.floating.current) return

    const refEl = refs.reference.current
    const floatingEl = refs.floating.current

    const handleMouseMove = (e: MouseEvent) => {
      const mouseX = e.clientX
      const mouseY = e.clientY

      const refRect = refEl.getBoundingClientRect()
      const floatingRect = floatingEl.getBoundingClientRect()

      const isInsideRef =
        mouseX >= refRect.left - hoverOffset &&
        mouseX <= refRect.right + hoverOffset &&
        mouseY >= refRect.top - hoverOffset &&
        mouseY <= refRect.bottom + hoverOffset

      const isInsideFloating =
        mouseX >= floatingRect.left - hoverOffset &&
        mouseX <= floatingRect.right + hoverOffset &&
        mouseY >= floatingRect.top - hoverOffset &&
        mouseY <= floatingRect.bottom + hoverOffset

      if (isInsideRef || isInsideFloating) {
        if (hoverCloseTimeout.current) {
          clearTimeout(hoverCloseTimeout.current)
          hoverCloseTimeout.current = null
        }
      } else {
        if (hoverCloseTimeout.current) clearTimeout(hoverCloseTimeout.current)
        hoverCloseTimeout.current = setTimeout(() => setIsOpen(false), hoverCloseDelay)
      }
    }

    document.addEventListener('mousemove', handleMouseMove)

    return () => {
      document.removeEventListener('mousemove', handleMouseMove)
      if (hoverCloseTimeout.current) {
        clearTimeout(hoverCloseTimeout.current)
      }
    }
  }, [isOpen, props.isFloatingHover, refs.reference, refs.floating, hoverOffset, hoverCloseDelay])

  const open = useCallback(() => setIsOpen(true), [])
  const close = useCallback(() => setIsOpen(false), [])
  const toggle = useCallback(() => setIsOpen(prev => !prev), [])

  return {
    isOpen,
    open,
    close,
    toggle,
    reference: refs.setReference as Ref<HTMLElement | null>,
    floating: refs.setFloating as Ref<HTMLElement | null>,
    floatingStyles,
    placement: actualPlacement
  }
}
