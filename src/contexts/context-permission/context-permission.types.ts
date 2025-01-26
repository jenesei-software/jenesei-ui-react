import { PropsWithChildren } from 'react'

export interface PermissionContextProps {
  pushNotificationSupported: boolean

  isBiometricSupported: boolean

  // eslint-disable-next-line no-undef
  notificationPermission: NotificationPermission | null
  isNotificationPermissionLoading: boolean
  // eslint-disable-next-line no-undef
  requestNotificationPermission: () => Promise<NotificationPermission | undefined>
  // eslint-disable-next-line no-undef
  geolocationPermission: PermissionState | null
  requestGeolocationPermission: () => void
}

export type ProviderPermissionProps = PropsWithChildren
