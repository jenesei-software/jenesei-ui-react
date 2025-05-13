import { FC, createContext, useEffect, useMemo, useState } from 'react'
import { useTheme } from 'styled-components'

import { ProviderScreenWidthProps, ScreenWidthContextProps, Screens } from '.'

export const ScreenWidthContext = createContext<ScreenWidthContextProps | null>(null)

export const ProviderScreenWidth: FC<ProviderScreenWidthProps> = props => {
  const theme = useTheme()
  const [screenWidth, setScreenWidth] = useState<Screens>('default')

  const screens: ScreenWidthContextProps['screens'] = useMemo(() => {
    const allSizes = Object.entries(theme.screens).map(([key]) => {
      return {
        isScreen: screenWidth === key,
        value: key as Screens
      }
    })
    return allSizes
  }, [screenWidth, theme.screens])

  const screenActual: ScreenWidthContextProps['screenActual'] = useMemo(() => {
    const find = screens.find(item => item.isScreen)
    return (
      find ?? {
        isScreen: true,
        value: 'default'
      }
    )
  }, [screens])

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      const screenSizes = Object.entries(theme.screens).sort(
        ([, a], [, b]) => +(a as { width: string }).width.slice(0, -2) - +(b as { width: string }).width.slice(0, -2)
      )
      const screenSize: Screens =
        (screenSizes.find(([, size]) => width <= +(size as { width: string }).width.slice(0, -2))?.[0] as Screens) ||
        'default'
      setScreenWidth(screenSize)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [theme.screens])

  return (
    <ScreenWidthContext.Provider
      value={{
        screens,
        screenActual,
        screenWidth
      }}
    >
      {props.children}
    </ScreenWidthContext.Provider>
  )
}
