import { useContext } from 'react'

import { PermissionContext } from '.'

export const usePermission = () => {
  const context = useContext(PermissionContext)
  if (!context) {
    throw new Error('usePermission must be used within an PermissionProvider')
  }
  return context
}
