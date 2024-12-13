import { useContext } from 'react'

import { ScreenWidthContext } from '.'

export const useScreenWidthContext = () => {
  const context = useContext(ScreenWidthContext)
  if (!context) {
    throw new Error('useScreenWidthContext must be used within an ProviderScreenWidth')
  }
  return context
}
