import { ReactNode } from 'react'

export interface PermissionContextProps {
  // eslint-disable-next-line no-undef
  notificationPermission: NotificationPermission | null
  // eslint-disable-next-line no-undef
  geolocationPermission: PermissionState | null
  pushNotificationSupported: boolean
  serviceWorkerRegistered: boolean
  isBiometricSupported: boolean
  pushSubscription: PushSubscription | null
  requestNotificationPermission: () => void
  requestGeolocationPermission: () => void
  registerServiceWorker: () => Promise<void>
  unregisterServiceWorker: () => Promise<void>
  subscribeToPushNotifications: (vapidKey: string) => Promise<void>
  unsubscribeToPushNotifications: () => Promise<void>
  setupPushNotifications: (vapidKey: string) => Promise<void>
}

export interface ProviderPermissionProps {
  children: ReactNode
  serviceWorkerPath: string
}

export type UseServiceWorkerProps = Pick<ProviderPermissionProps, 'serviceWorkerPath'> &
  Pick<PermissionContextProps, 'notificationPermission' | 'requestNotificationPermission'>
