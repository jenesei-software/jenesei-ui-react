'use client'

// Export styles and themes
export { JeneseiGlobalStyles, JeneseiTheme } from './theme'
export type { IJeneseiTheme } from './theme'

// Export types
export * from './types'

//Export functions
export * from './functions'

//Export consts
export * from './consts'

// Exporting components
export { Accordion } from './components/accordion'
export { Button } from './components/button'
export { ButtonGroup } from './components/button-group'
export { Checkbox } from './components/checkbox'
export { CheckboxGroup } from './components/checkbox-group'
export { DatePicker } from './components/date-picker'
export { Stack } from './components/stack'
export { Icon } from './components/icon'
export { Input } from './components/input'
export { Select, SelectLanguage, SelectMonth, SelectYear } from './components/select'
export { Toggle } from './components/toggle'
export { Typography } from './components/typography'
export { Separator } from './components/separator'
export { Ripple } from './components/ripple'
export { Image } from './components/image'
export { Tooltip } from './components/tooltip'

export { useRemovePreviewLoader, Preview } from './areas/preview'

export { Outside } from './areas/outside'
export { Scroll } from './areas/scroll'
export { Skeleton } from './areas/skeleton'
export { Smooth } from './areas/smooth'

export { AuthLayout } from './layouts/auth'

export { ProviderApp, AppContext, useApp } from './contexts/context-app'

export { ProviderCookie, CookieContext, useCookie, getFromCookie, setToCookie } from './contexts/context-cookie'
export type { ValidCookieObject } from './contexts/context-cookie'

export {
  ProviderLocalStorage,
  LocalStorageContext,
  useLocalStorage,
  getFromLocalStorage,
  setToLocalStorage
} from './contexts/context-local-storage'
export type { ValidLocalStorageObject } from './contexts/context-local-storage'

export { ProviderPermission, PermissionContext, usePermission } from './contexts/context-permission'
export { ProviderSonner, SonnerContext, useSonner } from './contexts/context-sonner'
export { ProviderGeolocation, GeolocationContext, useGeolocation } from './contexts/context-geolocation'
export { ProviderDialog, DialogContext, useDialogs, useDialog } from './contexts/context-dialog'
export { ProviderScreenWidth, ScreenWidthContext, useScreenWidth } from './contexts/context-screen-width'
