import { useGSAP } from '@gsap/react'
import { AnimatePresence, motion } from 'framer-motion'
import gsap from 'gsap'
import React, {
  FC,
  MouseEventHandler,
  createContext,
  memo,
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { Flipped, Flipper } from 'react-flip-toolkit'
import { v4 as uuidv4 } from 'uuid'

import { Button } from '@components/button'

import {
  ProviderSonnerProps,
  SonnerButtonWrapper,
  SonnerContent,
  SonnerContentDescription,
  SonnerContentProps,
  SonnerContentTitle,
  SonnerContextProps,
  SonnerElementProps,
  SonnerElementWrapper,
  SonnerLayout
} from '.'

export const SonnerContext = createContext<SonnerContextProps | null>(null)

export const ProviderSonner: FC<ProviderSonnerProps> = props => {
  const DEFAULT_HIDING_MODE: ProviderSonnerProps['defaultHidingMode'] = useMemo(
    () => props.defaultHidingMode ?? 'clickOnButton',
    [props.defaultHidingMode]
  )
  const memoMaxViewIndex: ProviderSonnerProps['maxViewIndex'] = useMemo(() => props.maxViewIndex, [props.maxViewIndex])
  const memoDefaultDescription: ProviderSonnerProps['defaultDescription'] = useMemo(
    () => props.defaultDescription,
    [props.defaultDescription]
  )
  const memoDefaultTitle: ProviderSonnerProps['defaultTitle'] = useMemo(() => props.defaultTitle, [props.defaultTitle])
  const memoDefaultButton: ProviderSonnerProps['defaultButton'] = useMemo(
    () => props.defaultButton,
    [props.defaultButton]
  )
  const DEFAULT_HIDING_TIME: ProviderSonnerProps['defaultHidingTime'] = useMemo(
    () => props.defaultHidingTime,
    [props.defaultHidingTime]
  )
  const DEFAULT_BUTTON: ProviderSonnerProps['defaultButton'] = useMemo(() => ({ text: 'Undo', onClick: () => {} }), [])

  const [contentHistory, setContentHistory] = useState<SonnerContentProps[]>([])

  const [isHovered, setIsHovered] = useState(false)
  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  const removeToast = useCallback(
    (id: SonnerContentProps['id']) => {
      setContentHistory(prev => {
        const itemToRemove = prev.find(item => item.id === id)

        if (!itemToRemove) return prev

        const indexToRemove = itemToRemove.index

        const updatedHistory = prev
          .filter(item => item.id !== id)
          .map(item => ({
            ...item,
            index: item.index > indexToRemove ? item.index - 1 : item.index
          }))

        if (updatedHistory.length === 0) handleMouseLeave()

        return updatedHistory
      })
    },
    [handleMouseLeave]
  )

  const toast: SonnerContextProps['toast'] = useCallback(
    content => {
      const id = content.id ?? uuidv4()

      const hidingTime = content.hidingTime ?? DEFAULT_HIDING_TIME

      setContentHistory(prev => {
        const updatedHistory = prev.map(item => ({
          ...item,
          index: item.index + 1
        }))

        const newContent = { ...content, id, index: 0 }
        updatedHistory.unshift(newContent)

        return updatedHistory
      })

      if (hidingTime !== undefined) {
        setTimeout(() => {
          removeToast(id)
        }, hidingTime)
      }
    },
    [DEFAULT_HIDING_TIME, removeToast]
  )

  const handleOnClick = useCallback(
    (id: SonnerContentProps['id'], hidingMode?: SonnerContentProps['hidingMode']) => {
      if (hidingMode) {
        if (hidingMode === DEFAULT_HIDING_MODE) {
          removeToast(id)
        }
      } else {
        removeToast(id)
      }
    },
    [DEFAULT_HIDING_MODE, removeToast]
  )
  return (
    <SonnerContext.Provider value={{ toast, removeToast, contentHistory }}>
      <SonnerLayout onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <AnimatePresence>
          {contentHistory.map(content => {
            const index = content.index ? +content.index : 0
            // const localMemoMaxViewIndex = memoMaxViewIndex ? (!isHovered ? memoMaxViewIndex : undefined) : undefined
            const localMemoMaxViewIndex = memoMaxViewIndex
            const isMoreThanLastViewIndexPlusOne = localMemoMaxViewIndex ? index >= localMemoMaxViewIndex : false
            const isMoreThanLastViewIndex = localMemoMaxViewIndex ? index >= localMemoMaxViewIndex - 1 : false
            const isLastViewIndex = localMemoMaxViewIndex ? index == localMemoMaxViewIndex - 1 : false

            const title = content.title || memoDefaultTitle
            const description = content.description || memoDefaultDescription
            const button = content.button || memoDefaultButton || DEFAULT_BUTTON
            const buttonText = button.text

            return (
              <MemoizedSonnerElement
                isMoreThanLastViewIndexPlusOne={isMoreThanLastViewIndexPlusOne}
                isMoreThanLastViewIndex={isMoreThanLastViewIndex}
                isLastViewIndex={isLastViewIndex}
                key={content.id}
                id={content.id}
                index={index}
                isHovered={isHovered}
                title={title}
                description={description}
                buttonText={buttonText}
                handleOnClick={handleOnClick}
              />
            )
          })}
        </AnimatePresence>
      </SonnerLayout>
      {props.children}
    </SonnerContext.Provider>
  )
}

export const SonnerElement: FC<SonnerElementProps> = props => {
  const elementRef = useRef<HTMLDivElement>(null)
  const index = useMemo(() => props.index, [props.index])
  const id = useMemo(() => props.id, [props.id])

  const isHovered = useMemo(() => props.isHovered, [props.isHovered])
  const isLastViewIndex = useMemo(() => props.isLastViewIndex, [props.isLastViewIndex])
  const isMoreThanLastViewIndex = useMemo(() => props.isMoreThanLastViewIndex, [props.isMoreThanLastViewIndex])
  const isMoreThanLastViewIndexPlusOne = useMemo(
    () => props.isMoreThanLastViewIndexPlusOne,
    [props.isMoreThanLastViewIndexPlusOne]
  )

  return (
    <motion.div
      key={id}
      layout
      initial={{ opacity: 0, scale: 1, y: isLastViewIndex ? -100 : 100 }}
      animate={{
        opacity: isMoreThanLastViewIndex ? 0 : 1,
        y: 0,
        display: isMoreThanLastViewIndexPlusOne ? 'none' : 'flex',
        scale: !isHovered ? 1 - index * 0.04 : 1,
        marginBottom: isHovered || index === 0 ? `0px` : `-${55}px`
      }}
      style={{
        zIndex: -index,
        alignItems: 'center',
        justifyContent: 'center',
        transformOrigin: 'center'
      }}
      whileInView={{ opacity: isMoreThanLastViewIndex ? 0 : 1 }}
      exit={{ opacity: 0, y: 100 }}
      transition={{ type: 'spring', duration: 0.4 }}
    >
      <SonnerElementWrapper ref={elementRef} onClick={() => props.handleOnClick(props.id, 'clickOnSonner')}>
        <SonnerContent>
          {props.title && <SonnerContentTitle>{props.title}</SonnerContentTitle>}
          {props.description && <SonnerContentDescription>{props.description}</SonnerContentDescription>}
        </SonnerContent>

        {props.buttonText && (
          <SonnerButtonWrapper>
            <Button genre="black" size="small" onClick={() => props.handleOnClick(props.id, 'clickOnButton')}>
              {props.buttonText}
            </Button>
          </SonnerButtonWrapper>
        )}
      </SonnerElementWrapper>
    </motion.div>
  )
}
const MemoizedSonnerElement = memo(SonnerElement)
