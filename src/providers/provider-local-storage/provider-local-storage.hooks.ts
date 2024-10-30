import { useContext } from 'react'

import { LocalStorageContext } from '.'

/**
 * Custom hook to access the LocalStorageContext.
 */
export const useLocalStorageContext = () => {
  const context = useContext(LocalStorageContext)
  if (!context) {
    throw new Error('useLocalStorageContext must be used within an ProviderLocalStorage')
  }
  return context
}
