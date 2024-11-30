import { useContext } from 'react'

import { GeolocationContext } from '.'

export const useGeolocationContext = () => {
  const context = useContext(GeolocationContext)
  if (!context) {
    throw new Error('useGeolocationContext must be used within an ProviderGeolocation')
  }
  return context
}
