import { PropsWithChildren } from 'react'

export type ProviderGeolocationProps = PropsWithChildren

export interface GeolocationContextProps {
  // eslint-disable-next-line no-undef
  geolocationPermission: PermissionState | null
  location: GeolocationPosition | null
  error: GeolocationPositionError | null
}
