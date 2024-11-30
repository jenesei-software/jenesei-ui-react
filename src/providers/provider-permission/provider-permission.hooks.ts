import { useContext } from 'react'

import { PermissionContext } from '.'

/**
 * Custom hook to access the PermissionContext.
*/
export const usePermission = () => {
  const context = useContext(PermissionContext)
  if (!context) {
    throw new Error('usePermission must be used within an PermissionProvider')
  }
  return context
}
