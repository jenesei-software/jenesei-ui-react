import { useCallback, useContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { DialogContext, DialogContextItemProps } from '.'

export const useDialogs = () => {
  const context = useContext(DialogContext)
  if (!context) {
    throw new Error('useDialogs must be used within an ProviderDialog')
  }
  return context
}

export const useDialog = (): DialogContextItemProps => {
  const { add, remove, dialogHistory } = useDialogs()
  const [id, setId] = useState<string | null>(null)

  const localAdd: DialogContextItemProps['add'] = useCallback(
    dialog => {
      const find = dialogHistory.find(item => item.id === dialog.id)
      if (!id || !find) {
        const id = dialog.id || uuidv4()
        setId(id)
        add({ ...dialog, id })
      }
    },
    [add, dialogHistory, id]
  )
  const localRemove = useCallback(() => {
    if (id) {
      remove(id)
      setId(null)
    }
  }, [id, remove])

  return { add: localAdd, remove: localRemove, id }
}
