import { useContext } from 'react'

import { ScreenWidthContext } from '.'

export const useScreenWidth = () => {
  const context = useContext(ScreenWidthContext)
  if (!context) {
    throw new Error('useScreenWidth must be used within an ProviderScreenWidth')
  }
  return context
}
