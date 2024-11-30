import { useContext } from 'react'

import { AppContext } from '.'

/**
 * Custom hook to access the AppContext.
 */
export const useAppContext = () => {
  const context = useContext(AppContext)
  if (!context) {
    throw new Error('useAppContext must be used within an ProviderApp')
  }
  return context
}
