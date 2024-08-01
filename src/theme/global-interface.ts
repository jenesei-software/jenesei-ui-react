export interface TJeneseiThemeGenreType {
  background: {
    rest: string
    hover: string
    focus: string
    active: string
  }
  border: {
    rest: string
    hover: string
    focus: string
    active: string
  }
  color: {
    rest: string
    hover: string
    focus: string
    active: string
    placeholder: string
  }
}

export interface TJeneseiThemeGenre {
  product: TJeneseiThemeGenreType
  gray: TJeneseiThemeGenreType
}

export interface IJeneseiThemeSize {
  height: number
  heightIcon: number
  radius: number
  padding: number
  font: number
}

export interface IJeneseiThemeScreens {
  mobile: { width: string }
  tablet: { width: string }
  other: boolean
}

export type TJeneseiThemeSize =
  | 'large'
  | 'largeMedium'
  | 'medium'
  | 'mediumSmall'
  | 'small'

export type TJeneseiFontFamily = 'Inter'

export interface IJeneseiTheme {
  transitionDuration: string
  transitionTimingFunction: string
  transition: string
  screens: IJeneseiThemeScreens
  fontFamily: TJeneseiFontFamily
  colors: {
    focus: string
    white: string
    danger: string
    button: TJeneseiThemeGenre
    toggle: TJeneseiThemeGenre
    checkbox: TJeneseiThemeGenre
    input: TJeneseiThemeGenre
  }
}

export type JeneseiThemeVariablesKeys =
  | 'black'
  | 'transparent'
  | 'white'
  | 'black01'
  | 'danger'
  | 'focus'
  | 'productRest'
  | 'productHover'
  | 'productActive'
  | 'productFocus'
  | 'grayRest'
  | 'grayHover'
  | 'grayActive'
  | 'grayFocus'
