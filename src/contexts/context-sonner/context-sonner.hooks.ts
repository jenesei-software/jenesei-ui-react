import { useContext } from 'react'

import { SonnerContext } from '.'

export const useSonner = () => {
  const context = useContext(SonnerContext)
  if (!context) {
    throw new Error('useSonner must be used within an ProviderSonner')
  }
  return context
}
