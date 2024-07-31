import { useEffect, useState } from 'react'

import { usePermission } from '@providers/provider-permission'

export const useGeolocation = () => {
  const { geolocationPermission, requestGeolocationPermission } =
    usePermission()

  const [location, setLocation] = useState<GeolocationPosition | null>(null)
  const [error, setError] = useState<GeolocationPositionError | null>(null)

  useEffect(() => {
    const handleSuccess = (position: GeolocationPosition) => {
      setLocation(position)
    }

    const handleError = (error: GeolocationPositionError) => {
      setError(error)
    }

    if (geolocationPermission === 'granted') {
      navigator.geolocation.getCurrentPosition(handleSuccess, handleError)
    } else {
      requestGeolocationPermission()
    }
  }, [geolocationPermission, requestGeolocationPermission])

  return { location, error, geolocationPermission }
}
