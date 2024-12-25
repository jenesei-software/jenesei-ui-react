'use client'

// Export styles and themes
export { JeneseiGlobalStyles, JeneseiTheme } from './theme'
export type { IJeneseiTheme } from './theme'

// Export types
export * from './types'

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
export { Loading } from './components/loading'
export { Select } from './components/select'
export { Toggle } from './components/toggle'
export { Tooltip } from './components/tooltip'
export { Typography } from './components/typography'
export { Separator } from './components/separator'
export { Ripple } from './components/ripple'

export { Preview } from './areas/preview'
export { Outside } from './areas/outside'
export { Scroll } from './areas/scroll'
export { Skeleton } from './areas/skeleton'
export { Smooth } from './areas/smooth'

export { AuthLayout } from './layouts/auth'

export { ProviderApp, AppContext, useApp } from './contexts/context-app'
export { ProviderCookie, CookieContext, useCookie } from './contexts/context-cookie'
export { ProviderLocalStorage, LocalStorageContext, useLocalStorage } from './contexts/context-local-storage'
export { ProviderPermission, PermissionContext, usePermission } from './contexts/context-permission'
export { ProviderSonner, SonnerContext, useSonner } from './contexts/context-sonner'
export { ProviderGeolocation, GeolocationContext, useGeolocation } from './contexts/context-geolocation'

export { ProviderDialog, DialogContext, useDialogs, useDialog } from './contexts/context-dialog'
