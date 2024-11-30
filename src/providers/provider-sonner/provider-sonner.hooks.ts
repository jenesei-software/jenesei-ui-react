import { useContext } from 'react'

import { SonnerContext } from '.'

export const useSonnerContext = () => {
  const context = useContext(SonnerContext)
  if (!context) {
    throw new Error('useSonnerContext must be used within an ProviderSonner')
  }
  return context
}
