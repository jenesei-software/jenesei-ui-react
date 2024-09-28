import { createContext, useCallback, useEffect, useState } from 'react'

import {
  PermissionContextProps,
  ProviderPermissionProps,
  urlBase64ToUint8Array
} from '.'

export const PermissionContext = createContext<PermissionContextProps | null>(
  null
)

export const ProviderPermission = (props: ProviderPermissionProps) => {
  const [notificationPermission, setNotificationPermission] =
    useState<NotificationPermission | null>(null)
  const [geolocationPermission, setGeolocationPermission] =
    useState<PermissionState | null>(null)

  const [pushNotificationSupported, setPushNotificationSupported] =
    useState<boolean>(false)
  const [serviceWorkerRegistered, setServiceWorkerRegistered] =
    useState<boolean>(false)
  const [pushSubscription, setPushSubscription] =
    useState<PushSubscription | null>(null)
  const [isBiometricSupported, setIsBiometricSupported] = useState(false)

  useEffect(() => {
    const checkBiometricAvailability = async () => {
      try {
        if (
          window.PublicKeyCredential &&
          typeof window.PublicKeyCredential
            .isUserVerifyingPlatformAuthenticatorAvailable === 'function'
        ) {
          const available =
            await window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
          setIsBiometricSupported(available)
        } else {
          setIsBiometricSupported(false)
        }
      } catch (error) {
        console.error('Error checking biometric availability:', error)
        setIsBiometricSupported(false)
      }
    }

    checkBiometricAvailability()
  }, [])

  useEffect(() => {
    if ('Notification' in window) {
      setNotificationPermission(window.Notification.permission)
    }

    if ('permissions' in window.navigator) {
      window.navigator.permissions
        .query({ name: 'geolocation' })
        .then((permissionStatus) => {
          setGeolocationPermission(permissionStatus.state)
          permissionStatus.onchange = () => {
            setGeolocationPermission(permissionStatus.state)
          }
        })
    }

    if ('PushManager' in window) {
      setPushNotificationSupported(true)
    }

    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.ready
        .then((registration) => {
          setServiceWorkerRegistered(true)
          registration.pushManager.getSubscription().then((subscription) => {
            if (subscription) {
              setPushSubscription(subscription)
            }
          })
        })
        .catch((error) => {
          console.error(
            'Provider Permission. Service Worker registration or access failed:',
            error
          )
        })
    } else {
      console.warn(
        'Provider Permission. Push notifications are not supported in this browser.'
      )
    }
  }, [])

  const requestNotificationPermission = useCallback(async () => {
    if ('Notification' in window) {
      try {
        const permission = await window.Notification.requestPermission()
        setNotificationPermission(permission)
      } catch (error) {
        console.error(
          'Provider Permission. Failed to request notification permission:',
          error
        )
      }
    } else {
      console.warn(
        'Provider Permission. Notifications are not supported in this browser.'
      )
    }
  }, [])

  const requestGeolocationPermission = useCallback(() => {
    if ('geolocation' in window.navigator) {
      window.navigator.geolocation.getCurrentPosition(
        () => setGeolocationPermission('granted'),
        () => setGeolocationPermission('denied')
      )
    } else {
      console.warn(
        'Provider Permission. Geolocation is not supported in this browser.'
      )
    }
  }, [])

  const registerServiceWorker = useCallback(async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register(
          props.serviceWorkerPath
        )
        console.log(
          'Provider Permission. Service Worker registered with scope:',
          registration.scope
        )
        setServiceWorkerRegistered(true)
      } catch (error) {
        console.error(
          'Provider Permission. Service Worker registration failed:',
          error
        )
        setServiceWorkerRegistered(false)
      }
    } else {
      console.warn(
        'Provider Permission. Service Workers are not supported in this browser.'
      )
    }
  }, [])

  const unregisterServiceWorker = useCallback(async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registrations = await navigator.serviceWorker.getRegistrations()
        for (const registration of registrations) {
          await registration.unregister()
          console.log(
            'Provider Permission. Service Worker unregistered successfully:',
            registration.scope
          )
        }
        setServiceWorkerRegistered(false)
      } catch (error) {
        console.error(
          'Provider Permission. Failed to unregister Service Worker:',
          error
        )
      }
    } else {
      console.warn(
        'Provider Permission. Service Workers are not supported in this browser.'
      )
    }
  }, [])

  const subscribeToPushNotifications = useCallback(
    async (vapidKey: string) => {
      if (!serviceWorkerRegistered) {
        console.error(
          'Provider Permission. Service Worker registration is not available.'
        )
        return
      }

      try {
        const registration = await navigator.serviceWorker.ready
        const subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(vapidKey)
        })
        setPushSubscription(subscription)
        console.log(
          'Provider Permission. Push Notification Subscription:',
          subscription
        )
      } catch (error) {
        console.error(
          'Provider Permission. Failed to subscribe for Push Notifications',
          error
        )
      }
    },
    [serviceWorkerRegistered]
  )

  const setupPushNotifications = useCallback(
    async (vapidKey: string) => {
      if (notificationPermission !== 'granted') {
        await requestNotificationPermission()
        if (window.Notification.permission !== 'granted') {
          console.warn('Provider Permission. Notification permission denied.')
          return
        }
      }

      if (!serviceWorkerRegistered) {
        console.error(
          'Provider Permission. Service Worker registration or access failed.'
        )
      }

      await subscribeToPushNotifications(vapidKey)
    },
    [
      notificationPermission,
      requestNotificationPermission,
      serviceWorkerRegistered,
      subscribeToPushNotifications
    ]
  )

  const unsubscribeToPushNotifications = useCallback(async () => {
    if (pushSubscription) {
      try {
        await pushSubscription.unsubscribe()
        setPushSubscription(null)
        console.log('Provider Permission. Push subscription cancelled.')
      } catch (error) {
        console.error(
          'Provider Permission. Failed to cancel push subscription',
          error
        )
      }
    } else {
      console.warn('Provider Permission. No push subscription to cancel.')
    }
  }, [pushSubscription])

  return (
    <PermissionContext.Provider
      value={{
        isBiometricSupported,
        notificationPermission,
        geolocationPermission,
        pushNotificationSupported,
        serviceWorkerRegistered,
        pushSubscription,
        requestNotificationPermission,
        requestGeolocationPermission,
        registerServiceWorker,
        unregisterServiceWorker,
        subscribeToPushNotifications,
        unsubscribeToPushNotifications,
        setupPushNotifications
      }}
    >
      {props.children}
    </PermissionContext.Provider>
  )
}
