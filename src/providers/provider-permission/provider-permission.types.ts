import { ReactNode } from 'react'

export interface PermissionContextProps {
  notificationPermission: NotificationPermission | null
  geolocationPermission: PermissionState | null
  pushNotificationSupported: boolean
  serviceWorkerRegistered: boolean
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
}
