import { useEffect, useMemo, useState } from 'react'
import { useTheme } from 'styled-components'

import { IJeneseiThemeScreens } from '@theme/index'

type Screens = keyof IJeneseiThemeScreens

export const useScreenWidth = () => {
  const theme = useTheme()
  const [screenWidth, setScreenWidth] = useState<Screens>('other')

  const isMaxWidthTablet = useMemo(() => screenWidth === 'mobile' || screenWidth === 'tablet', [screenWidth])

  const isTablet = useMemo(() => screenWidth === 'tablet', [screenWidth])

  const isMobile = useMemo(() => screenWidth === 'mobile', [screenWidth])

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const screenSize: Screens =
        width <= +theme.screens.mobile.width.slice(0, -2)
          ? 'mobile'
          : width <= +theme.screens.tablet.width.slice(0, -2)
            ? 'tablet'
            : 'other'
      setScreenWidth(screenSize)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [theme.screens.mobile.width, theme.screens.tablet.width])

  return { isMobile, isTablet, isMaxWidthTablet }
}
