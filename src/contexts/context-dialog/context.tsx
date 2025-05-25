import { AnimatePresence } from 'framer-motion'
import { FC, createContext, memo, useCallback, useMemo, useState } from 'react'

import { Outside } from '@local/areas/outside'

import {
  DEFAULT_PROVIDER_DIALOG_DURATION_ELEMENT,
  DEFAULT_PROVIDER_DIALOG_DURATION_LAYOUT,
  DEFAULT_PROVIDER_DIALOG_ELEMENT_BACKGROUND,
  DEFAULT_PROVIDER_DIALOG_ELEMENT_BORDER_RADIUS,
  DEFAULT_PROVIDER_DIALOG_ELEMENT_MAX_HEIGHT,
  DEFAULT_PROVIDER_DIALOG_ELEMENT_MAX_WIDTH,
  DEFAULT_PROVIDER_DIALOG_ELEMENT_PADDING,
  DialogContentProps,
  DialogContextProps,
  DialogElementProps,
  DialogElementWrapper,
  DialogLayout,
  ProviderDialogProps
} from '.'

export const DialogContext = createContext<DialogContextProps<object> | null>(null)

export const ProviderDialog: FC<ProviderDialogProps> = props => {
  const [dialogHistory, setDialogHistory] = useState<DialogContentProps<object>[]>([])

  const remove: DialogContextProps<object>['remove'] = useCallback(id => {
    setDialogHistory(prev => {
      const itemToRemove = prev.find(item => item.id === id)

      if (!itemToRemove) return prev

      const indexToRemove = itemToRemove.index!

      const updatedHistory = prev
        .filter(item => item.id !== id)
        .map(item => ({
          ...item,
          index: item.index! > indexToRemove ? item.index! - 1 : item.index
        }))

      return updatedHistory
    })
  }, [])

  const update: DialogContextProps<object>['update'] = useCallback(dialog => {
    setDialogHistory(prev => {
      return prev.map(item => {
        if (item.id === dialog.id) {
          return { ...item, ...dialog }
        }
        return item
      })
    })
  }, [])

  const add: DialogContextProps<object>['add'] = useCallback(dialog => {
    const id = dialog.id

    setDialogHistory(prev => {
      const existingIndex = prev.findIndex(item => item.id === id)

      let updatedHistory
      if (existingIndex !== -1) {
        updatedHistory = [...prev]
        updatedHistory[existingIndex] = { ...dialog, id, index: prev[existingIndex].index }
      } else {
        updatedHistory = prev.map(item => ({
          ...item,
          index: item.index! + 1
        }))
        const newContent = { ...dialog, id, index: 0 }
        updatedHistory.unshift(newContent)
      }

      return updatedHistory
    })
  }, [])

  const dialogHistoryLength = useMemo(() => dialogHistory.length, [dialogHistory.length])
  const zIndex = useMemo(() => props.zIndex, [props.zIndex])

  return (
    <DialogContext.Provider value={{ add, remove, update, dialogHistory }}>
      <AnimatePresence>
        {dialogHistoryLength && (
          <DialogLayout
            $zIndex={zIndex}
            initial={{
              opacity: 0
            }}
            exit={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            transition={{ type: 'spring', duration: DEFAULT_PROVIDER_DIALOG_DURATION_LAYOUT }}
          >
            {dialogHistory.map(dialog => {
              const index = dialog.index
              const content = dialog.content
              const id = dialog.id
              const props = dialog.props
              const maxWidth = dialog.maxWidth || DEFAULT_PROVIDER_DIALOG_ELEMENT_MAX_WIDTH
              const maxHeight = dialog.maxHeight || DEFAULT_PROVIDER_DIALOG_ELEMENT_MAX_HEIGHT
              const borderRadius = dialog.borderRadius || DEFAULT_PROVIDER_DIALOG_ELEMENT_BORDER_RADIUS
              const padding = dialog.padding || DEFAULT_PROVIDER_DIALOG_ELEMENT_PADDING
              const background = dialog.background || DEFAULT_PROVIDER_DIALOG_ELEMENT_BACKGROUND
              return (
                <MemoizedDialogElement
                  index={index}
                  content={content}
                  props={props}
                  key={id}
                  id={id}
                  maxWidth={maxWidth}
                  maxHeight={maxHeight}
                  borderRadius={borderRadius}
                  background={background}
                  padding={padding}
                  remove={() => remove(id)}
                />
              )
            })}
          </DialogLayout>
        )}
      </AnimatePresence>

      {props.children}
    </DialogContext.Provider>
  )
}

const DialogElement = (props: DialogElementProps) => {
  const [isAnimating, setIsAnimating] = useState(true)
  return (
    <Outside onOutsideClick={() => props.remove()}>
      <DialogElementWrapper
        key={props.id}
        initial={{
          opacity: 0,
          scale: 0.8
        }}
        animate={{
          opacity: 1,
          scale: 1
        }}
        onAnimationComplete={() => setIsAnimating(false)}
        transition={{
          type: 'spring',
          duration: DEFAULT_PROVIDER_DIALOG_DURATION_ELEMENT,
          delay: DEFAULT_PROVIDER_DIALOG_DURATION_LAYOUT
        }}
        style={{
          zIndex: -props.index!
        }}
        $maxHeight={props.maxHeight}
        $maxWidth={props.maxWidth}
        $borderRadius={props.borderRadius}
        $padding={props.padding}
        $background={props.background}
      >
        {props.content?.(props.props, props.remove, isAnimating)}
      </DialogElementWrapper>
    </Outside>
  )
}
const MemoizedDialogElement = memo(DialogElement)
