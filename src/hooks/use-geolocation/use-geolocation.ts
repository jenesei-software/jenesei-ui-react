import { useEffect, useState } from 'react'

import { usePermission } from '@providers/provider-permission'

/**
 * Custom hook to get the user's current geolocation.
 *
 * This hook uses the browser's Geolocation API to fetch the user's current position.
 * It also handles permission requests for accessing geolocation data.
 *
 * @returns {Object} An object containing:
 * - `location` {GeolocationPosition | null}: The user's current geolocation position, or null if not available.
 * - `error` {GeolocationPositionError | null}: Any error encountered while fetching the geolocation, or null if no error.
 * - `geolocationPermission` {string}: The current permission status for accessing geolocation data.
 *
 * Note: This hook must be used within a component wrapped by `ProviderPermission`.
 */
export const useGeolocation = () => {
  const { geolocationPermission, requestGeolocationPermission } = usePermission()

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
