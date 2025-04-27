import { useContext } from 'react'

import { GeolocationContext } from '.'

export const useGeolocation = () => {
  const context = useContext(GeolocationContext)
  if (!context) {
    throw new Error('useGeolocation must be used within an ProviderGeolocation')
  }
  return context
}
