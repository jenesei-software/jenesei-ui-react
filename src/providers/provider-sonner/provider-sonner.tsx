import { FC, createContext, useCallback, useMemo, useState } from 'react'
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
  SonnerLayout,
  SonnerWrapper
} from '.'

export const SonnerContext = createContext<SonnerContextProps | null>(null)

export const ProviderSonner: FC<ProviderSonnerProps> = props => {
  const DEFAULT_HIDING_MODE: ProviderSonnerProps['defaultHidingMode'] = useMemo(() => 'clickOnButton', [])
  const DEFAULT_BUTTON: ProviderSonnerProps['defaultButton'] = useMemo(() => ({ text: 'Undo', onClick: () => {} }), [])
  const DEFAULT_HIDING_TIME: ProviderSonnerProps['defaultHidingTime'] = useMemo(
    () => props.defaultHidingTime,
    [props.defaultHidingTime]
  )

  const [contentHistory, setContentHistory] = useState<SonnerContentProps[]>([])

  const removeToast = useCallback((id: SonnerContentProps['id']) => {
    setContentHistory(prev => {
      const updatedHistory = prev.filter(item => item.id !== id)

      // Пересчёт индексов для оставшихся элементов
      updatedHistory.forEach((item, idx) => {
        item.index = idx
      })

      return updatedHistory
    })
  }, [])

  const toast = useCallback(
    (content: SonnerContentProps) => {
      const id = content.id ?? uuidv4()

      const hidingTime = content.hidingTime ?? DEFAULT_HIDING_TIME

      const newContent = { ...content, id }

      setContentHistory(prev => {
        const updatedHistory = [...prev]

        if (content.index !== undefined) {
          // Проверяем, есть ли элемент с таким индексом
          const existingIndex = updatedHistory.findIndex(item => item.index === content.index)
          if (existingIndex !== -1) {
            // Сдвигаем элементы с индексами >= текущему
            for (let i = updatedHistory.length - 1; i >= existingIndex; i--) {
              updatedHistory[i].index = (updatedHistory[i].index ?? i) + 1
            }
          }
        }

        // Если индекс не указан, добавляем в начало списка
        const insertIndex = content.index ?? 0

        // Добавляем новый элемент
        updatedHistory.splice(insertIndex, 0, newContent)

        // Пересчитываем индексы для всех элементов
        updatedHistory.forEach((item, idx) => {
          item.index = idx
        })

        return updatedHistory
      })

      // Устанавливаем таймер на удаление, если hidingTime задан
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
      <SonnerLayout>
        {contentHistory.map(content => {
          const title = content.title || props.defaultTitle
          const description = content.description || props.defaultDescription
          const button = content.button || props.defaultButton || DEFAULT_BUTTON
          const buttonText = button.text
          return (
            <SonnerWrapper key={content.id} onClick={() => handleOnClick(content.id, 'clickOnSonner')}>
              <SonnerContent>
                {title && <SonnerContentTitle>{title}</SonnerContentTitle>}
                {description && <SonnerContentDescription>{description}</SonnerContentDescription>}
              </SonnerContent>
              {button && (
                <SonnerButtonWrapper>
                  <Button genre="black" size="small" onClick={() => handleOnClick(content.id, 'clickOnButton')}>
                    {buttonText}
                  </Button>
                </SonnerButtonWrapper>
              )}
            </SonnerWrapper>
          )
        })}
      </SonnerLayout>
      {props.children}
    </SonnerContext.Provider>
  )
}
