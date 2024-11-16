import { FC, createContext, useEffect, useMemo, useState } from 'react'
import { useTheme } from 'styled-components'

import { ProviderScreenWidthProps, ScreenWidthContextProps, Screens } from '.'

export const ScreenWidthContext = createContext<ScreenWidthContextProps | null>(null)

export const ProviderScreenWidth: FC<ProviderScreenWidthProps> = props => {
  const theme = useTheme()
  const [screenWidth, setScreenWidth] = useState<Screens | 'other'>('other')

  const isTabletMobile = useMemo(() => screenWidth === 'mobile' || screenWidth === 'tablet', [screenWidth])

  const isTablet = useMemo(() => screenWidth === 'tablet', [screenWidth])

  const isMobile = useMemo(() => screenWidth === 'mobile', [screenWidth])

  const isOther = useMemo(() => screenWidth === 'other', [screenWidth])

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

  return (
    <ScreenWidthContext.Provider
      value={{
        isTabletMobile,
        isTablet,
        isMobile,
        isOther,
        screenWidth
      }}
    >
      {props.children}
    </ScreenWidthContext.Provider>
  )
}
