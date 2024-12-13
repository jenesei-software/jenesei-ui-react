import { createContext, useCallback, useEffect, useState } from 'react'

import { PermissionContextProps, ProviderPermissionProps, UseServiceWorkerProps, urlBase64ToUint8Array } from '.'

export const PermissionContext = createContext<PermissionContextProps | null>(null)

/**
 * ProviderPermission component that provides various permissions and service worker functionalities
 * to its children through the PermissionContext.
 *
 * @param {ProviderPermissionProps} props - The properties passed to the ProviderPermission component.
 * @returns {JSX.Element} The ProviderPermission component with the context context.
 *
 * @remarks
 * This component uses several custom hooks to manage permissions and service worker functionalities:
 * - `usePushNotificationSupported`: Checks if push notifications are supported.
 * - `useBiometricSupported`: Checks if biometric authentication is supported.
 * - `useNotificationPermission`: Manages notification permissions.
 * - `useGeolocationPermission`: Manages geolocation permissions.
 * - `useServiceWorkerForPush`: Manages service worker registration and push notifications.
 *
 * The context provided includes:
 * - `isBiometricSupported`: Boolean indicating if biometric authentication is supported.
 * - `notificationPermission`: The current state of notification permissions.
 * - `geolocationPermission`: The current state of geolocation permissions.
 * - `pushNotificationSupported`: Boolean indicating if push notifications are supported.
 * - `serviceWorkerRegistered`: Boolean indicating if the service worker is registered.
 * - `pushSubscription`: The current push subscription.
 * - `requestNotificationPermission`: Function to request notification permissions.
 * - `requestGeolocationPermission`: Function to request geolocation permissions.
 * - `registerServiceWorker`: Function to register the service worker.
 * - `unregisterServiceWorker`: Function to unregister the service worker.
 * - `subscribeToPushNotifications`: Function to subscribe to push notifications.
 * - `unsubscribeToPushNotifications`: Function to unsubscribe from push notifications.
 * - `setupPushNotifications`: Function to set up push notifications.
 */
export const ProviderPermission = (props: ProviderPermissionProps) => {
  const { pushNotificationSupported } = usePushNotificationSupported()
  const { isBiometricSupported } = useBiometricSupported()
  const { notificationPermission, requestNotificationPermission } = useNotificationPermission()
  const { geolocationPermission, requestGeolocationPermission } = useGeolocationPermission()
  const {
    registerServiceWorker,
    unregisterServiceWorker,
    subscribeToPushNotifications,
    unsubscribeToPushNotifications,
    setupPushNotifications,
    pushSubscription,
    serviceWorkerRegistered
  } = useServiceWorkerForPush({
    serviceWorkerPath: props.serviceWorkerPath,
    notificationPermission,
    requestNotificationPermission
  })

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

/**
 * Custom hook to check if biometric authentication is supported on the current platform.
 */
const useBiometricSupported = () => {
  const [isBiometricSupported, setIsBiometricSupported] = useState(false)

  useEffect(() => {
    const checkBiometricAvailability = async () => {
      try {
        if (
          window.PublicKeyCredential &&
          typeof window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable === 'function'
        ) {
          const available = await window.PublicKeyCredential.isUserVerifyingPlatformAuthenticatorAvailable()
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

  return { isBiometricSupported }
}

/**
 * Custom hook to manage notification permissions.
 */
const useNotificationPermission = () => {
  // eslint-disable-next-line no-undef
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission | null>(null)

  const requestNotificationPermission = useCallback(async () => {
    if ('Notification' in window) {
      try {
        const permission = await window.Notification.requestPermission()
        setNotificationPermission(permission)
      } catch (error) {
        console.error('Provider Permission. Failed to request notification permission:', error)
      }
    } else {
      console.warn('Provider Permission. Notifications are not supported in this browser.')
    }
  }, [])

  useEffect(() => {
    if ('Notification' in window) {
      setNotificationPermission(window.Notification.permission)
    }
  }, [])
  return { notificationPermission, requestNotificationPermission }
}

/**
 * Custom hook to manage geolocation permissions.
 *
 * This hook provides the current state of the geolocation permission and a function to request the permission.
 *
 * @returns {Object} An object containing:
 * - `geolocationPermission` (PermissionState | null): The current state of the geolocation permission.
 * - `requestGeolocationPermission` (Function): A function to request the geolocation permission.
 *
 * @example
 * const { geolocationPermission, requestGeolocationPermission } = useGeolocationPermission();
 *
 * useEffect(() => {
 *   if (geolocationPermission === 'granted') {
 *     // Permission granted, you can access geolocation data
 *   }
 * }, [geolocationPermission]);
 *
 * return (
 *   <button onClick={requestGeolocationPermission}>
 *     Request Geolocation Permission
 *   </button>
 * );
 */
const useGeolocationPermission = () => {
  // eslint-disable-next-line no-undef
  const [geolocationPermission, setGeolocationPermission] = useState<PermissionState | null>(null)

  useEffect(() => {
    if ('permissions' in window.navigator) {
      window.navigator.permissions.query({ name: 'geolocation' }).then(permissionStatus => {
        setGeolocationPermission(permissionStatus.state)
        permissionStatus.onchange = () => {
          setGeolocationPermission(permissionStatus.state)
        }
      })
    }
  }, [])

  const requestGeolocationPermission = useCallback(() => {
    if ('geolocation' in window.navigator) {
      window.navigator.geolocation.getCurrentPosition(
        () => setGeolocationPermission('granted'),
        () => setGeolocationPermission('denied')
      )
    } else {
      console.warn('Provider Permission. Geolocation is not supported in this browser.')
    }
  }, [])

  return { geolocationPermission, requestGeolocationPermission }
}

/**
 * Custom hook to check if push notifications are supported in the current browser.
 *
 * @returns {Object} An object containing a boolean value indicating whether push notifications are supported.
 * @returns {boolean} pushNotificationSupported - True if push notifications are supported, false otherwise.
 */
const usePushNotificationSupported = () => {
  const [pushNotificationSupported, setPushNotificationSupported] = useState<boolean>(false)

  useEffect(() => {
    if ('PushManager' in window) {
      setPushNotificationSupported(true)
    }
  }, [])

  return { pushNotificationSupported }
}

/**
 * Custom hook to manage service worker registration and push notifications.
 *
 * @param {UseServiceWorkerProps} props - The properties required for service worker and push notifications.
 * @returns {Object} - An object containing methods and state related to service worker and push notifications.
 *
 * @property {Function} registerServiceWorker - Registers the service worker using the provided path.
 * @property {Function} unregisterServiceWorker - Unregister all service workers.
 * @property {Function} subscribeToPushNotifications - Subscribes to push notifications using the provided VAPID key.
 * @property {Function} unsubscribeToPushNotifications - Unsubscribes from push notifications.
 * @property {Function} setupPushNotifications - Sets up push notifications, requesting notification permission if needed.
 * @property {PushSubscription | null} pushSubscription - The current push subscription, or null if not subscribed.
 * @property {boolean} serviceWorkerRegistered - Indicates whether the service worker is registered.
 */
const useServiceWorkerForPush = (props: UseServiceWorkerProps) => {
  const [serviceWorkerRegistered, setServiceWorkerRegistered] = useState<boolean>(false)
  const [pushSubscription, setPushSubscription] = useState<PushSubscription | null>(null)

  useEffect(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.ready
        .then(registration => {
          setServiceWorkerRegistered(true)
          registration.pushManager.getSubscription().then(subscription => {
            if (subscription) {
              setPushSubscription(subscription)
            }
          })
        })
        .catch(error => {
          console.error('Provider Permission. Service Worker registration or access failed:', error)
        })
    } else {
      console.warn('Provider Permission. Push notifications are not supported in this browser.')
    }
  }, [])

  const registerServiceWorker = useCallback(async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registration = await navigator.serviceWorker.register(props.serviceWorkerPath)
        console.log('Provider Permission. Service Worker registered with scope:', registration.scope)
        setServiceWorkerRegistered(true)
      } catch (error) {
        console.error('Provider Permission. Service Worker registration failed:', error)
        setServiceWorkerRegistered(false)
      }
    } else {
      console.warn('Provider Permission. Service Workers are not supported in this browser.')
    }
  }, [props.serviceWorkerPath])

  const unregisterServiceWorker = useCallback(async () => {
    if ('serviceWorker' in navigator) {
      try {
        const registrations = await navigator.serviceWorker.getRegistrations()
        for (const registration of registrations) {
          await registration.unregister()
          console.log('Provider Permission. Service Worker unregistered successfully:', registration.scope)
        }
        setServiceWorkerRegistered(false)
      } catch (error) {
        console.error('Provider Permission. Failed to unregister Service Worker:', error)
      }
    } else {
      console.warn('Provider Permission. Service Workers are not supported in this browser.')
    }
  }, [])

  const subscribeToPushNotifications = useCallback(
    async (vapidKey: string) => {
      if (!serviceWorkerRegistered) {
        console.error('Provider Permission. Service Worker registration is not available.')
        return
      }

      try {
        const registration = await navigator.serviceWorker.ready
        const subscription = await registration.pushManager.subscribe({
          userVisibleOnly: true,
          applicationServerKey: urlBase64ToUint8Array(vapidKey)
        })
        setPushSubscription(subscription)
        console.log('Provider Permission. Push Notification Subscription:', subscription)
      } catch (error) {
        console.error('Provider Permission. Failed to subscribe for Push Notifications', error)
      }
    },
    [serviceWorkerRegistered]
  )

  const setupPushNotifications = useCallback(
    async (vapidKey: string) => {
      if (props.notificationPermission !== 'granted') {
        await props.requestNotificationPermission()
        if (window.Notification.permission !== 'granted') {
          console.warn('Provider Permission. Notification permission denied.')
          return
        }
      }

      if (!serviceWorkerRegistered) {
        console.error('Provider Permission. Service Worker registration or access failed.')
      }

      await subscribeToPushNotifications(vapidKey)
    },
    [
      props.notificationPermission,
      props.requestNotificationPermission,
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
        console.error('Provider Permission. Failed to cancel push subscription', error)
      }
    } else {
      console.warn('Provider Permission. No push subscription to cancel.')
    }
  }, [pushSubscription])

  return {
    registerServiceWorker,
    subscribeToPushNotifications,
    unsubscribeToPushNotifications,
    unregisterServiceWorker,
    setupPushNotifications,
    pushSubscription,
    serviceWorkerRegistered
  }
}
