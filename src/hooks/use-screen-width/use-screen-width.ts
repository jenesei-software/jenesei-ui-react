import { useEffect, useMemo, useState } from 'react'
import { useTheme } from 'styled-components'

import { IJeneseiThemeScreens } from '@theme/index'

type Screens = keyof IJeneseiThemeScreens

export const useScreenWidth = () => {
  const theme = useTheme()
  const [screenWidth, setScreenWidth] = useState<Screens | 'other'>('other')

  const isMaxWidthTablet = useMemo(() => screenWidth === 'mobile' || screenWidth === 'tablet', [screenWidth])

  const isTablet = useMemo(() => screenWidth === 'tablet', [screenWidth])

  const isMobile = useMemo(() => screenWidth === 'mobile', [screenWidth])

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const screenSizes = Object.entries(theme.screens).sort(
        ([, a], [, b]) => +(a as { width: string }).width.slice(0, -2) - +(b as { width: string }).width.slice(0, -2)
      )
      const screenSize: Screens | 'other' =
        (screenSizes.find(([, size]) => width <= +(size as { width: string }).width.slice(0, -2))?.[0] as Screens) ||
        'other'
      setScreenWidth(screenSize)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [theme.screens])

  return { isMobile, isTablet, isMaxWidthTablet }
}
