import { useContext } from 'react'

import { LocalStorageContext } from '.'

export const useLocalStorage = () => {
  const context = useContext(LocalStorageContext)
  if (!context) {
    throw new Error('useLocalStorage must be used within an ProviderLocalStorage')
  }
  return context
}
