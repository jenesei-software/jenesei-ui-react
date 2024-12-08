import { AnimatePresence, motion } from 'framer-motion'
import { FC, createContext, memo, useCallback, useMemo, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Button } from '@components/button'

import {
  DEFAULT_PROVIDER_SONNER_BUTTON,
  DEFAULT_PROVIDER_SONNER_DURATION,
  DEFAULT_PROVIDER_SONNER_MARGIN_BOTTOM,
  DEFAULT_PROVIDER_SONNER_SCALE,
  DEFAULT_PROVIDER_SONNER_Y,
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
  const memoVisibleToasts: ProviderSonnerProps['visibleToasts'] = useMemo(
    () => props.visibleToasts,
    [props.visibleToasts]
  )
  const memoDefaultDescription: ProviderSonnerProps['default']['description'] = useMemo(
    () => props?.default?.description,
    [props?.default?.description]
  )
  const memoDefaultTitle: ProviderSonnerProps['default']['title'] = useMemo(
    () => props?.default?.title,
    [props?.default?.title]
  )
  const memoDefaultButton: ProviderSonnerProps['default']['button'] = useMemo(
    () => props?.default?.button,
    [props?.default?.button]
  )
  const memoDefaultHidingTime: ProviderSonnerProps['default']['hidingTime'] = useMemo(
    () => props?.default?.hidingTime,
    [props?.default?.hidingTime]
  )
  const memoDefaultHidingMode: ProviderSonnerProps['default']['hidingMode'] = useMemo(
    () => props?.default?.hidingMode ?? 'clickOnButton',
    [props?.default?.hidingMode]
  )

  const [contentHistory, setContentHistory] = useState<SonnerContentProps[]>([])

  const [isHovered, setIsHovered] = useState(false)

  const handleMouseEnter = useCallback(() => {
    setIsHovered(true)
  }, [])

  const handleMouseLeave = useCallback(() => {
    setIsHovered(false)
  }, [])

  const remove: SonnerContextProps['remove'] = useCallback(
    id => {
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

      const hidingTime = content.hidingTime ?? memoDefaultHidingTime

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
          remove(id)
        }, hidingTime)
      }
    },
    [memoDefaultHidingTime, remove]
  )

  const handleOnClick = useCallback(
    (id: SonnerContentProps['id'], hidingMode?: SonnerContentProps['hidingMode']) => {
      if (hidingMode) {
        if (hidingMode === memoDefaultHidingMode) {
          remove(id)
        }
      } else {
        remove(id)
      }
    },
    [memoDefaultHidingMode, remove]
  )

  return (
    <SonnerContext.Provider value={{ toast, remove, contentHistory }}>
      <SonnerLayout onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <AnimatePresence>
          {contentHistory.map(content => {
            const index = content.index
            const isMoreThanLastViewIndexPlusOne = memoVisibleToasts ? index > memoVisibleToasts : false
            const isMoreThanLastViewIndex = memoVisibleToasts ? index > memoVisibleToasts - 1 : false
            const isLastViewIndex = memoVisibleToasts ? index == memoVisibleToasts - 1 : false

            return (
              <MemoizedSonnerElement
                isMoreThanLastViewIndexPlusOne={isMoreThanLastViewIndexPlusOne}
                isMoreThanLastViewIndex={isMoreThanLastViewIndex}
                isLastViewIndex={isLastViewIndex}
                key={content.id}
                id={content.id}
                index={index}
                isHovered={isHovered}
                title={content.title || memoDefaultTitle}
                description={content.description || memoDefaultDescription}
                button={content.button || memoDefaultButton || DEFAULT_PROVIDER_SONNER_BUTTON}
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

const SonnerElement: FC<SonnerElementProps> = props => {
  return (
    <motion.div
      key={props.id}
      layout
      initial={{
        opacity: 0,
        scale: 1,
        y: props.isLastViewIndex ? -DEFAULT_PROVIDER_SONNER_Y : DEFAULT_PROVIDER_SONNER_Y
      }}
      animate={{
        y: 0,
        opacity: props.isMoreThanLastViewIndex ? 0 : 1,
        pointerEvents: props.isMoreThanLastViewIndex ? 'none' : 'auto',
        display: props.isMoreThanLastViewIndexPlusOne ? 'none' : 'flex',
        scale: !props.isHovered ? 1 - props.index * DEFAULT_PROVIDER_SONNER_SCALE : 1,
        marginBottom: props.isHovered || props.index === 0 ? `0px` : `-${DEFAULT_PROVIDER_SONNER_MARGIN_BOTTOM}px`
      }}
      style={{
        zIndex: -props.index
      }}
      whileInView={{ opacity: props.isMoreThanLastViewIndex ? 0 : 1 }}
      exit={{ opacity: 0, y: DEFAULT_PROVIDER_SONNER_Y }}
      transition={{ type: 'spring', duration: DEFAULT_PROVIDER_SONNER_DURATION }}
    >
      <SonnerElementWrapper onClick={() => props.handleOnClick(props.id, 'clickOnSonner')}>
        <SonnerContent>
          {props.title && <SonnerContentTitle>{props.title}</SonnerContentTitle>}
          {props.description && <SonnerContentDescription>{props.description}</SonnerContentDescription>}
        </SonnerContent>

        {props.button && props.button.content && (
          <SonnerButtonWrapper>
            <Button genre="black" size="small" onClick={() => props.handleOnClick(props.id, 'clickOnButton')}>
              {props.button.content}
            </Button>
          </SonnerButtonWrapper>
        )}
      </SonnerElementWrapper>
    </motion.div>
  )
}
const MemoizedSonnerElement = memo(SonnerElement)
