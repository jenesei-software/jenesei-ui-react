import { AnimatePresence } from 'framer-motion'
import { FC, createContext, memo, useCallback, useMemo, useState } from 'react'
import { Outside } from 'src/areas/outside'

import {
  DEFAULT_PROVIDER_DIALOG_DURATION_ELEMENT,
  DEFAULT_PROVIDER_DIALOG_DURATION_LAYOUT,
  DEFAULT_PROVIDER_DIALOG_ELEMENT_MAX_HEIGHT,
  DEFAULT_PROVIDER_DIALOG_ELEMENT_MAX_WIDTH,
  DialogContentProps,
  DialogContextProps,
  DialogElementProps,
  DialogElementWrapper,
  DialogLayout,
  ProviderDialogProps
} from '.'

export const DialogContext = createContext<DialogContextProps | null>(null)

export const ProviderDialog: FC<ProviderDialogProps> = props => {
  const [dialogHistory, setDialogHistory] = useState<DialogContentProps[]>([])

  const remove: DialogContextProps['remove'] = useCallback(id => {
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

  const add: DialogContextProps['add'] = useCallback(dialog => {
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

  const memoDefaultMaxHeight: ProviderDialogProps['default']['maxHeight'] = useMemo(
    () => props?.default?.maxHeight,
    [props?.default?.maxHeight]
  )
  const memoDefaultMaxWidth: ProviderDialogProps['default']['maxWidth'] = useMemo(
    () => props?.default?.maxWidth,
    [props?.default?.maxWidth]
  )

  return (
    <DialogContext.Provider value={{ add, remove, dialogHistory }}>
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
              const maxWidth = dialog.maxWidth || memoDefaultMaxWidth || DEFAULT_PROVIDER_DIALOG_ELEMENT_MAX_WIDTH
              const maxHeight = dialog.maxHeight || memoDefaultMaxHeight || DEFAULT_PROVIDER_DIALOG_ELEMENT_MAX_HEIGHT
              return (
                <MemoizedDialogElement
                  index={index}
                  content={content}
                  key={id}
                  id={id}
                  maxWidth={maxWidth}
                  maxHeight={maxHeight}
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
      >
        {props.content}
      </DialogElementWrapper>
    </Outside>
  )
}
const MemoizedDialogElement = memo(DialogElement)
